const saleController = {};
import saleModel from "../models/sale.js";

// SELECT
saleController.getSale = async (req, res) => {
  const sale = await saleModel.find();
  res.json(sale);
};

// INSERT
saleController.createSale = async (req, res) => {
  const { idSale, idClient, totalAmount, Products, idProducts, quantityProducts, paymentMethod, idOrders, orderStatus } = req.body;
  const newSale = new saleModel({ idSale, idClient, totalAmount, Products, idProducts, quantityProducts, paymentMethod, idOrders, orderStatus });
  await newSale.save();
  res.json({ message: "sale saved" });
};

// DELETE
saleController.deleteSale = async (req, res) => {
  const deleteSale = await saleModel.findByIdAndDelete(req.params.id);
  if (!deletedSale) {
    return res.status(404).json({ message: "Sale no encontrado" });
  }
  res.json({ message: "sale deleted" });
};

// UPDATE
saleController.updatedSale = async (req, res) => {
  // Solicito todos los valores
  const {  idSale, idClient, totalAmount, Products, idProducts, quantityProducts, paymentMethod, idOrders, orderStatus } = req.body;
  // Actualizo
  await saleModel.findByIdAndUpdate(
    req.params.id,
    {
      idSale, idClient, totalAmount, Products, idProducts, quantityProducts, paymentMethod, idOrders, orderStatus
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "sale updated" });
};

export default saleController;
