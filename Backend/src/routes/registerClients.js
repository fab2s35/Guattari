import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  // lógica para registrar usuario
  res.json({ message: "Registro OK" });
});


export default router;

