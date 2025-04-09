/*
Este archivo tiene los metodos del CRUD (select, insert, update, delete)
*/


//Creo un array de funciones
const ordersController = {};
import orders from "../models/orders.js"
import ordersModel from "../models/orders.js"

// SELECT (antes de hacer el select (o cualquiera) voy a models)
ordersController.getOrders = async (req, res) => {
     const orders = await ordersModel.find()
     res.json(orders)
}

//INSERT
ordersController.insertOrder= async (req, res) => {
    const { idClient, idProducts, total } = req.body;
    const newOrder = new ordersController({ idClient, idProducts, total });
    await newOrder.save();
    res.json({ message: "Order saved" });
  };


//DELETE
ordersController.deleteOrder = async (req, res) =>{
    await ordersModel.findByIdAndDelete(req.params.id)
    res.json({message: "Order deleted"}) 
}

//UPDATE
ordersController.updateOrder = async (req, res) =>{
    const { idClient, idProducts, total } = (req.params.id,
        {idClient, idProducts, total}, {new: true})
    res.json({message: "Order updated"})
}

export default ordersController;