//Array de metodos (C R U D)
const employeesController = {};
import employeeModel from "../models/employees.js";


// SELECT
employeesController.getEmployee = async (req, res) => {
  const employee = await employeeModel.find();
  res.json(employee);
};

// INSERT
employeesController.insertEmployee = async (req, res) => {
  const { name, lastName, phone, assignedPosition, branchAddressId, passwordUser, photoUser } = req.body;
  const newEmployee= new employeeModel({ name, lastName, phone, assignedPosition, branchAddressId, passwordUser, photoUser  });
  await newEmployee.save();
  res.json({ message: "Employee saved" });
};

// DELETE
employeesController.deleteEmployee = async (req, res) => {
const deletedEmployee = await employeeModel.findByIdAndDelete(req.params.id);
  if (!deletedEmployee) {
    return res.status(404).json({ message: "Employee wasn't found" });
  }
  res.json({ message: "Employee deleted" });
};

// UPDATE
employeesController.updateEmployee = async (req, res) => {
  const { name, lastName, phone, assignedPosition, branchAddressId, passwordUser, photoUser  } = req.body;
  await employeeModel.findByIdAndUpdate(
    req.params.id,
    { name, lastName, phone, assignedPosition, branchAddressId, passwordUser, photoUser },
    { new: true }
  );
  res.json({ message: "employee update" });
};

export default employeesController;