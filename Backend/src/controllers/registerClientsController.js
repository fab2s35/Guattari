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
  return nodemailer.createTransporter({
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
    console.log('=== INICIO REGISTRO ===');
    console.log('Datos recibidos:', { name, email, password: password ? '[PRESENT]' : '[MISSING]' });

    // Validar que lleguen los datos
    if (!req.body || !name || !email || !password) {
      console.log('ERROR: Faltan datos en el body');
      return res.status(400).json({
        success: false,
        message: "Faltan datos requeridos",
        received: { name: !!name, email: !!email, password: !!password }
      });
    }

    // Validar datos
    const validationErrors = validateClientData(req.body);
    if (validationErrors.length > 0) {
      console.log('ERROR: Validación fallida:', validationErrors);
      return res.status(400).json({
        success: false,
        message: "Errores de validación",
        errors: validationErrors,
      });
    }

    // Verificar si email ya existe
    console.log('Verificando email existente...');
    const existingClient = await clientsModel.findOne({ email: email.toLowerCase() });
    if (existingClient) {
      console.log('ERROR: Email ya existe');
      return res.status(409).json({
        success: false,
        message: "Ya existe una cuenta con este email",
      });
    }

    // Hashear contraseña
    console.log('Hasheando contraseña...');
    const passwordHash = await bcryptjs.hash(password, 12);

    // Crear cliente nuevo
    console.log('Creando nuevo cliente...');
    const newClient = new clientsModel({
      name: name.trim(),
      email: email.toLowerCase(),
      password: passwordHash,
      isVerified: false,
      createdAt: new Date(),
    });

    console.log('Cliente a guardar:', {
      name: newClient.name,
      email: newClient.email,
      isVerified: newClient.isVerified,
      createdAt: newClient.createdAt
    });

    // Guardar cliente - CON MÁS LOGGING
    console.log('Guardando cliente en base de datos...');
    try {
      savedClient = await newClient.save();
      console.log('✓ Cliente guardado exitosamente:', {
        id: savedClient._id,
        name: savedClient.name,
        email: savedClient.email
      });
    } catch (saveError) {
      console.error('ERROR al guardar cliente:', saveError);
      throw saveError;
    }

    // Verificar que realmente se guardó
    console.log('Verificando que el cliente se guardó...');
    const verifyClient = await clientsModel.findById(savedClient._id);
    if (!verifyClient) {
      console.error('ERROR: El cliente no se encontró después de guardarlo');
      throw new Error('El cliente no se guardó correctamente');
    }
    console.log('✓ Verificación exitosa - Cliente existe en DB');

    // Generar código de verificación numérico de 6 dígitos
    console.log('Generando código de verificación...');
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

    // Solo enviar email si el cliente se guardó exitosamente
    console.log('Enviando email de verificación...');
    try {
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
      console.log("✓ Correo enviado exitosamente:", info.messageId);
    } catch (emailError) {
      console.error('ERROR al enviar email:', emailError);
      // No fallar el registro por problema de email
      console.log('Continuando sin enviar email...');
    }

    console.log('=== REGISTRO COMPLETADO EXITOSAMENTE ===');
    return res.status(201).json({
      success: true,
      message: "Cliente registrado exitosamente. Revisa tu correo para confirmar tu cuenta.",
      email: email.toLowerCase(),
      userId: savedClient._id, // Incluir ID para debug
      debug: process.env.NODE_ENV !== "production" ? { 
        userId: savedClient._id,
        verificationCode,
        clientSaved: true 
      } : undefined,
    });

  } catch (error) {
    console.error("=== ERROR EN REGISTRO ===");
    console.error("Error completo:", error);
    console.error("Stack trace:", error.stack);

    // Si hubo error y el cliente ya fue creado, eliminarlo para evitar inconsistencia
    if (savedClient && savedClient._id) {
      console.log('Intentando eliminar cliente creado tras error...');
      try {
        await clientsModel.findByIdAndDelete(savedClient._id);
        console.log('✓ Cliente eliminado tras error');
      } catch (delError) {
        console.error("ERROR eliminando cliente tras fallo:", delError);
      }
    }

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor. Intenta nuevamente.",
      debug: process.env.NODE_ENV !== "production" ? {
        error: error.message,
        stack: error.stack,
        savedClient: !!savedClient
      } : undefined,
    });
  }
};

registerClientsController.verifyEmailCode = async (req, res) => {
  const { code } = req.body;

  try {
    console.log('=== VERIFICACIÓN DE CÓDIGO ===');
    console.log('Código recibido:', code);

    if (!code || code.trim().length !== 6) {
      return res.status(400).json({
        success: false,
        message: "Debe proporcionar un código de verificación válido de 6 dígitos",
      });
    }

    const token = req.cookies.verificationToken;
    console.log('Token encontrado:', !!token);
    
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token de verificación no encontrado o expirado",
      });
    }

    let decoded;
    try {
      decoded = jsonwebtoken.verify(token, config.JWT.secret);
      console.log('Token decodificado:', { userId: decoded.userId, email: decoded.email });
    } catch (jwtError) {
      console.log('Error JWT:', jwtError.message);
      return res.status(400).json({
        success: false,
        message: "Token inválido o expirado",
      });
    }

    const { verificationCode, userId } = decoded;

    if (code.trim() !== verificationCode) {
      console.log('Código incorrecto. Esperado:', verificationCode, 'Recibido:', code.trim());
      return res.status(400).json({
        success: false,
        message: "Código de verificación incorrecto",
      });
    }

    const client = await clientsModel.findById(userId);
    if (!client) {
      console.log('Cliente no encontrado con ID:', userId);
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

    console.log('Actualizando cliente como verificado...');
    client.isVerified = true;
    client.verifiedAt = new Date();
    await client.save();

    res.clearCookie("verificationToken");

    console.log('✓ Verificación completada exitosamente');
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