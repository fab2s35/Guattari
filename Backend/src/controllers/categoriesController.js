/*
Este archivo tiene los metodos del CRUD (select, insert, update, delete)
*/


//Creo un array de funciones
const categoriesController = {};
import Categories from "../models/categories.js"
import categoriesModel from "../models/categories.js"

// SELECT (antes de hacer el select (o cualquiera) voy a models)
categoriesController.getCategories = async (req, res) => {
     const categories = await categoriesModel.find()
     res.json(categories)
}


//INSERT
categoriesController.insertCategories = async (req, res) =>{
    const { nameCategories } = req.body;
    const newCategory = new categoriesModel({nameCategories})
    await newCategory.save()
    res.json({message: "Category saved"})
}   


//DELETE
categoriesController.deleteCategories = async (req, res) =>{
    await categoriesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Category deleted"}) 
}

//UPDATE
categoriesController.updateCategories = async (req, res) =>{
    const { nameCategories } = (req.params.id,
        {nameCategories}, {new: true})
    res.json({message: "Categeory updated successfully"})
}

export default categoriesController;