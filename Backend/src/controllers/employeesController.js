//Array de metodos (C R U D)
const employeesController = {};
import employeesModel from "../models/employees.js";

// SELECT
employeesController.getEmployee = async (req, res) => {
  const employees = await employeesModel.find();
  res.json(employees);
};

// INSERT
employeesController.createEmployee = async (req, res) => {
  const {  name, lastname, phone, assignedPosition, passwordUser } = req.body;
  const newEmployee = new employeesModel({  name, lastname, phone, assignedPosition, passwordUser});
  await newEmployee.save();
  res.json({ message: "Employee save" });
};

// DELETE
employeesController.deleteEmployee = async (req, res) => {
const deletedemployee = await employeesModel.findByIdAndDelete(req.params.id);
  if (!deletedemployee) {
    return res.status(404).json({ message: "Employee dont find" });
  }
  res.json({ message: "Employee deleted" });
};

// UPDATE
employeesController.updateEmployee = async (req, res) => {
  // Solicito todos los valores
  const { name, lastname, phone, assignedPosition, passwordUser } = req.body;
  // Actualizo
  await employeesModel.findByIdAndUpdate(
    req.params.id,
    {
        name, lastname, phone, assignedPosition, passwordUser
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "employee update" });
};

export default employeesController;
