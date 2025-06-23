import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Importar rutas
import categoriesRoutes from "./src/routes/categories.js";
import shoppingCartRoutes from "./src/routes/shoppingCart.js";
import ordersRoutes from "./src/routes/orders.js";
import employeesRoutes from "./src/routes/employees.js";
import brandsRoutes from "./src/routes/brands.js";
import branchesRoutes from "./src/routes/branches.js";
import suppliersRoutes from "./src/routes/suppliers.js";
import productsRoutes from "./src/routes/products.js";
import saleRoutes from "./src/routes/sale.js";
import subcategoryRoutes from "./src/routes/subcategory.js";
import clientsRoutes from "./src/routes/clients.js";
import reviewRoutes from "./src/routes/reviews.js";

import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import registerClient from "./src/routes/registerClients.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";

import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

// Importar controlador adicional (solo si usas esta ruta independiente)
import registerClientsController from "./src/controllers/registerClientsController.js";

const app = express();

// Middleware CORS (ajusta origen según tu frontend)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Rutas protegidas (requieren token y roles)
app.use("/api/products", validateAuthToken(["employee", "admin"]), productsRoutes);

// Rutas públicas
app.use("/api/categories", categoriesRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/brands", brandsRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/sale", saleRoutes);
app.use("/api/subcategory", subcategoryRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/registerClients", registerClient);

// Aquí montas el router para password recovery
// Dentro de passwordRecoveryRoutes están definidas las rutas:
// POST /requestCode, POST /verifyCode, POST /newPassword
app.use("/api/passwordRecovery", passwordRecoveryRoutes);

// Si tienes una ruta independiente para verificar código diferente, la agregas así:
// (Ejemplo: POST /api/verify)
app.post("/api/verify", registerClientsController.verifyEmailCode);

export default app;

