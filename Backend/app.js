//Importo todo lo de la libreria express
import express from "express";
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
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());




//Middlewares
app.use(
    cors({
        origin: "*",
        //Permitir enviar cookies y creedenciales
        credentials: true,
    })
);

//middleware para que acepte datos json
app.use(express.json());

//Que acepte cookies 
app.use(cookieParser());

app.use("/api/products", validateAuthToken(["employee", "admin"]), productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/brands", brandsRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/sale", saleRoutes);
app.use("/api/subcategory", subcategoryRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/review", reviewRoutes);


app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);


//exporto esta constante para usar express en todos lados 
export default app;