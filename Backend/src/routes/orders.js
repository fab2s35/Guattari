import express from "express";

const router = express.Router();

import ordersController from "../controllers/ordersController.js";

router
  .route("/")
  .get(ordersController.getOrders)
  .post(ordersController.insertOrder);

router
  .route("/:id")
  .put(ordersController.updateOrder)
  .delete(ordersController.deleteOrder);

export default router;