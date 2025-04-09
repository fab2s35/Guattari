import express from "express";

const router = express.Router();

import employeesController from "../controllers/employeesController.js";

router
  .route("/")
  .get(employeesController.getEmployee)
  .post(employeesController.insertEmployee);

router
  .route("/:id")
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

export default router;