const clientsController = {};
import clientsModel from "../models/clients.js";

// SELECT
clientsController.getClients = async (req, res) => {
  const clients = await clientsModel.find();
  res.json(clients);
};

// INSERT
clientsController.createClients = async (req, res) => {
  const { idClient, nameClient, lastNameClient, dui, phone, address	} = req.body;
  const newClient = new clientsModel({ idClient, nameClient, lastNameClient, dui, phone, address});
  await newClient.save();
  res.json({ message: "client saved" });
};

// DELETE
clientsController.deleteClients = async (req, res) => {
  const deleteClients = await clientsModel.findByIdAndDelete(req.params.id);
  if (!deletedClients) {
    return res.status(404).json({ message: "Client no encontrado" });
  }
  res.json({ message: "client deleted" });
};

// UPDATE
clientsController.updatedClients = async (req, res) => {
  // Solicito todos los valores
  const { idClient, nameClient, lastNameClient, dui, phone, address } = req.body;
  // Actualizo
  await clientsModel.findByIdAndUpdate(
    req.params.id,
    {
        idClient, nameClient, lastNameClient, dui, phone, address
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "sale updated" });
};

export default clientsController;
