import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";
import validator from "validator";

import clientsModel from "../models/clients.js";
import { config } from "../config.js";

const registerClientsController = {};

// Validar datos de cliente
const validateClientData = (data) => {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("El nombre debe tener al menos 2 caracteres");
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(data.name.trim())) {
    errors.push("El nombre solo puede contener letras y espacios");
  }

  if (!data.email || !validator.isEmail(data.email)) {
    errors.push("Debe proporcionar un email válido");
  }

  if (!data.password || data.password.length < 8) {
    errors.push("La contraseña debe tener al menos 8 caracteres");
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(data.password)) {
    errors.push("Debe contener al menos una mayúscula, una minúscula y un número");
  }

  return errors;
};

// Crear transportador reutilizable
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email.email_user,
      pass: config.email.email_pass,
    },
    tls: { rejectUnauthorized: false },
    debug: process.env.NODE_ENV !== 'production',
    logger: process.env.NODE_ENV !== 'production',
  });
};

registerClientsController.register = async (req, res) => {
  const { name, email, password } = req.body;
  let savedClient = null;

  try {
    // Validar datos
    const validationErrors = validateClientData(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Errores de validación",
        errors: validationErrors,
      });
    }

    // Verificar si email ya existe
    const existingClient = await clientsModel.findOne({ email: email.toLowerCase() });
    if (existingClient) {
      return res.status(409).json({
        success: false,
        message: "Ya existe una cuenta con este email",
      });
    }

    // Hashear contraseña
    const passwordHash = await bcryptjs.hash(password, 12);

    // Crear cliente nuevo
    const newClient = new clientsModel({
      name: name.trim(),
      email: email.toLowerCase(),
      password: passwordHash,
      isVerified: false,
      createdAt: new Date(),
    });

    // Guardar cliente
    savedClient = await newClient.save();

    // Generar código de verificación numérico de 6 dígitos
    const verificationCode = crypto.randomInt(100000, 999999).toString();

    // Crear token con email, código y userId
    const tokenCode = jsonwebtoken.sign(
      {
        email: email.toLowerCase(),
        verificationCode,
        userId: savedClient._id,
      },
      config.JWT.secret,
      { expiresIn: "2h" }
    );

    // Configurar cookie segura para el token
    res.cookie("verificationToken", tokenCode, {
      maxAge: 2 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // Crear transportador y verificar conexión SMTP
    const transporter = createTransporter();
    await transporter.verify();

    // Opciones del correo con diseño HTML
    const mailOptions = {
      from: `"Guattari" <${config.email.email_user}>`,
      to: email.toLowerCase(),
      subject: "Verifica tu cuenta - Guattari",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>¡Hola ${name}!</h2>
          <p>Gracias por registrarte en Guattari. Usa el siguiente código para verificar tu correo:</p>
          <div style="background:#f0f0f0; padding: 20px; text-align: center; font-size: 30px; letter-spacing: 8px; font-weight: bold; border-radius: 8px;">
            ${verificationCode}
          </div>
          <p>Este código expira en 2 horas.</p>
        </div>
      `,
    };

    // Enviar correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);

    return res.status(201).json({
      success: true,
      message: "Cliente registrado exitosamente. Revisa tu correo para confirmar tu cuenta.",
      email: email.toLowerCase(),
      debug: process.env.NODE_ENV !== "production" ? { messageId: info.messageId, verificationCode } : undefined,
    });
  } catch (error) {
    console.error("Error en registro:", error);

    // Si hubo error y el cliente ya fue creado, eliminarlo para evitar inconsistencia
    if (savedClient) {
      try {
        await clientsModel.findByIdAndDelete(savedClient._id);
      } catch (delError) {
        console.error("Error eliminando cliente tras fallo:", delError);
      }
    }

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor. Intenta nuevamente.",
      debug: process.env.NODE_ENV !== "production" ? error.message : undefined,
    });
  }
};

registerClientsController.verifyEmailCode = async (req, res) => {
  const { code } = req.body;

  try {
    if (!code || code.trim().length !== 6) {
      return res.status(400).json({
        success: false,
        message: "Debe proporcionar un código de verificación válido de 6 dígitos",
      });
    }

    const token = req.cookies.verificationToken;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token de verificación no encontrado o expirado",
      });
    }

    let decoded;
    try {
      decoded = jsonwebtoken.verify(token, config.JWT.secret);
    } catch (jwtError) {
      return res.status(400).json({
        success: false,
        message: "Token inválido o expirado",
      });
    }

    const { verificationCode, userId } = decoded;

    if (code.trim() !== verificationCode) {
      return res.status(400).json({
        success: false,
        message: "Código de verificación incorrecto",
      });
    }

    const client = await clientsModel.findById(userId);
    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    if (client.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Tu cuenta ya está verificada",
      });
    }

    client.isVerified = true;
    client.verifiedAt = new Date();
    await client.save();

    res.clearCookie("verificationToken");

    return res.status(200).json({
      success: true,
      message: "Correo verificado correctamente",
      user: {
        id: client._id,
        name: client.name,
        email: client.email,
      },
    });
  } catch (error) {
    console.error("Error en verificación:", error);
    return res.status(500).json({
      success: false,
      message: "Error al verificar el correo. Intenta nuevamente.",
    });
  }
};

export default registerClientsController;

