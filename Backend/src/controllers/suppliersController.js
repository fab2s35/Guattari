const suppliersController = {};
import suppliers from "../models/suppliers.js"
import suppliersModel from "../models/suppliers.js"

//SELECT 
suppliersController.getSuppliers = async (req, res) => {
     const suppliers = await suppliersModel.find()
     res.json(suppliers)
}

//INSERT
suppliersController.insertSuppliers = async (req, res) =>{
    const {nameSuppliers, emailSuppliers, phoneSuppliers, countryOriginSuppliers} = req.body;
    const newSuppliers = new suppliersModel({nameSuppliers, emailSuppliers, phoneSuppliers, countryOriginSuppliers})
    await newSuppliers.save()
    res.json({message: "Supplierssaved"})
}   

//DELETE
suppliersController.deleteSuppliers= async (req, res) =>{
    await SuppliersModel.findByIdAndDelete(req.params.id)
    res.json({message: "Suppliers deleted"}) 
}

//UPDATE
suppliersController.updateSuppliers = async (req, res) =>{
    const {nameSuppliers, emailSuppliers, phoneSuppliers, countryOriginSuppliers} = (req.params.id,
        {nameSuppliers, emailSuppliers, phoneSuppliers, countryOriginSuppliers}, {new: true})
    res.json({message: "Suppliers updated successfully"})
}

export default suppliersController;