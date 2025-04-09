import express from "express";
import subcategoryController from "../controllers/subcategoryController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(subcategoryController.getSubcategory)
  .post(subcategoryController.createSubcategory);

router
  .route("/:id")
  .put(subcategoryController.updateSubcategory)
  .delete(subcategoryController.deleteSubcategory);

export default router;
