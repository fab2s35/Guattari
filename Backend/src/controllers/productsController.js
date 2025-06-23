
const productsController = {};
import productsModel from "../models/products.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

//1- Configurar cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});



// SELECT

productsController.getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    return res.json(products); // ✅ Solo una respuesta
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ message: "Error 500, error al mostrar" });
  }
};


// INSERT
productsController.createProducts = async (req, res) => {
  const { idproducts, nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSupplier	 } = req.body;
  let imageURL = "";
  //subir la imagen a Cloudinary
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "products",
      allowed_formats: ["jpg", "png", "jpeg"],
    });
    imageURL = result.secure_url;
  }

  const newProduct = new productsModel({ idproducts,nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSupplier });
  await newProduct.save();
  res.json({ message: "product saved" });
};

// DELETE
productsController.deleteProducts = async (req, res) => {
  const deletedProduct = await productsModel.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json({ message: "product deleted" });
};

// UPDATE
productsController.updateProducts = async (req, res) => {
  // Solicito todos los valores
  const {  idproducts, nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSupplier } = req.body;
  let imageURL = "";

  //subir la imagen a Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageURL = result.secure_url;
    }

  // Actualizo
  await productsModel.findByIdAndUpdate(
    req.params.id,
    {
      idproducts, nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSupplier
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "product updated" });
};

export default productsController;
