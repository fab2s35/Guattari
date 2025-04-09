/*Este archivo sirve para definir que metodos del crud va a tener 
mi ruta (/api/products)*/

import express from "express";
import categoriesControllers from "../controllers/categoriesController.js";

const router = express.Router();

router.route("/")
.get(categoriesControllers.getCategories)
.post(categoriesControllers.insertCategories)

router.route("/:id")
.put(categoriesControllers.updateCategories)
.delete(categoriesControllers.deleteCategories)

export default router;