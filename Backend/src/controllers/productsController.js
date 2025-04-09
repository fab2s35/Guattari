
const productsController = {};
import productsModel from "../models/products.js";

// SELECT
productsController.getProducts = async (req, res) => {
  const products = await productsModel.find();
  res.json(products);
};

// INSERT
productsController.createProducts = async (req, res) => {
  const { idProduct, nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSuppliers	 } = req.body;
  const newProduct = new productsModel({ idProduct,nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSuppliers });
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
  const {  idProduct, nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSuppliers } = req.body;
  // Actualizo
  await productsModel.findByIdAndUpdate(
    req.params.id,
    {
      idProduct, nameProduct, description,  photo, codeEAN, unitPrice, amount, idSubCategory, idBrand, idSuppliers
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "product updated" });
};

export default productsController;
