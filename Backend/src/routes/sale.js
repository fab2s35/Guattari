import express from "express";
import saleController from "../controllers/saleController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(saleController.getSale)
  .post(saleController.createSale);

router
  .route("/:id")
  .put(saleController.updatedSale)
  .delete(saleController.deleteSale);

export default router;
