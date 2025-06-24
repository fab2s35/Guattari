import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Middlewares
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

// Rutas protegidas por rol
import productsRoutes from "./src/routes/products.js";
import ordersRoutes from "./src/routes/orders.js";
import employeesRoutes from "./src/routes/employees.js";
import saleRoutes from "./src/routes/sale.js";

// Rutas públicas
import categoriesRoutes from "./src/routes/categories.js";
import shoppingCartRoutes from "./src/routes/shoppingCart.js";
import brandsRoutes from "./src/routes/brands.js";
import branchesRoutes from "./src/routes/branches.js";
import suppliersRoutes from "./src/routes/suppliers.js";
import subcategoryRoutes from "./src/routes/subcategory.js";
import clientsRoutes from "./src/routes/clients.js";
import reviewRoutes from "./src/routes/reviews.js";

import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import registerClient from "./src/routes/registerClients.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";

import registerClientsController from "./src/controllers/registerClientsController.js";

const app = express();

// Configuración general
app.use(cors({
  origin: 'http://localhost:5173', // Asegúrate que sea el frontend correcto
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

/* 
  ============================
  RUTAS PÚBLICAS
  ============================
*/
app.use("/api/categories", categoriesRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/brands", brandsRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/subcategory", subcategoryRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/registerClients", registerClient);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
app.post("/api/verify", registerClientsController.verifyEmailCode);

/* 
  ============================
  RUTAS PROTEGIDAS POR ROL
  ============================
*/

// Solo ADMIN
app.use("/api/employees", validateAuthToken(["Admin"]), employeesRoutes);

// Admin o Empleado
app.use("/api/products", validateAuthToken(["Admin", "Employee"]), productsRoutes);
app.use("/api/sale", validateAuthToken(["Admin", "Employee"]), saleRoutes);
app.use("/api/orders", validateAuthToken(["Admin", "Employee"]), ordersRoutes);

// Cliente autenticado (por ejemplo, perfil de cliente)
app.use("/api/profile", validateAuthToken(["Customer", "Admin", "Employee"]), clientsRoutes);

// Ruta exclusiva de prueba para Admin
app.get("/api/adminOnly", validateAuthToken(["Admin"]), (req, res) => {
  res.json({ message: "Solo los administradores pueden ver esto" });
});

export default app;

