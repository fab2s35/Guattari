import bcryptjs from "bcryptjs"; // Encriptar


//import employeesModel from "../models/employees.js";
import { config } from "../config.js";

// Creamos un array de funciones
const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) => {
  //1- Solicitar las cosas que vamos a guardar
  const {
    name, lastname, phone, assignedPosition, passwordUser, isVerified,
  } = req.body;

  try {

    // Validar que los campos requeridos no esten vacios
    if (!name || !phone || !assignedPosition || !passwordUser) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardo al cliente en la base de datos
    const newEmployee = new clientsModel({
      name,
      lastname,
      phone,
      assignedPosition,
      passwordUser: passwordHash,
      isVerified: isVerified || false,
    });

    await newEmployee.save();


  } catch (error) {
    res.json({ message: "error" });
  }
};

export default registerEmployeesController;
