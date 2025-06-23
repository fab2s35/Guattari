import suppliersModel from "../models/suppliers.js";

const suppliersController = {};

// SELECT - Obtener todos los suppliers
suppliersController.getSuppliers = async (req, res) => {
  try {
    const suppliers = await suppliersModel.find();
    res.json(suppliers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching suppliers" });
  }
};

// INSERT - Crear un nuevo supplier
suppliersController.insertSuppliers = async (req, res) => {
  try {
    const { nameSuppliers, emailSuppliers, phoneSuppliers, nationality } = req.body;
    const newSupplier = new suppliersModel({ nameSuppliers, emailSuppliers, phoneSuppliers, nationality });
    await newSupplier.save();
    res.json({ message: "Supplier saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving supplier" });
  }
};

// DELETE - Eliminar supplier por ID
suppliersController.deleteSuppliers = async (req, res) => {
  try {
    await suppliersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Supplier deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting supplier" });
  }
};

// UPDATE - Actualizar supplier por ID
suppliersController.updateSuppliers = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameSuppliers, emailSuppliers, phoneSuppliers, nationality } = req.body;

    const updatedSupplier = await suppliersModel.findByIdAndUpdate(
      id,
      { nameSuppliers, emailSuppliers, phoneSuppliers, nationality },
      { new: true }
    );

    if (!updatedSupplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    res.json({ message: "Supplier updated successfully", updatedSupplier });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating supplier" });
  }
};

export default suppliersController;
