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



//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());

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



//exporto esta constante para usar express en todos lados 
export default app;