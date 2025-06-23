import express from "express";
import productsController from "../controllers/productsController.js";
import multer from "multer"; 
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

//configurar una carpeta local que guarde las imagenes
const upload = multer({dest: "public/products/"})

router
  .route("/")
  .get(productsController.getProducts)
  .post(upload.single("photo"), productsController.createProducts);

router
  .route("/:id")
  .put(productsController.updateProducts)
  .delete(productsController.deleteProducts);

export default router;
