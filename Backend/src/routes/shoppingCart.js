import express from "express";

const router = express.Router();

import shoppingCartController from "../controllers/shoppingCartController.js";

router
  .route("/")
  .get(shoppingCartController.getShoppingCart)
  .post(shoppingCartController.insertShoppingCart);

router
  .route("/:id")
  .put(shoppingCartController.updateShoppingCart)
  .delete(shoppingCartController.deleteShoppingCart);

export default router;