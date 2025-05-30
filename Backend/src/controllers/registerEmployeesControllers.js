import clientsModel from "../models/clients.js";
import bcryptjs from "bcryptjs"; //Encripta la contraseña
import jsonwebtoken from "jsonwebtoken"; //Token
import {config} from "..config.js"
import clients from "../models/clients.js";

const registerClientsController = {};

registerClientsController.register = async (req, res) => {
    const {nameClient, lastNameClient, dui, phone, address} = req.body;
    
    try {
        //Verificar si el cliente ya existe
        const exisClients = await clientsModel.findOne({email})
        if(exisEmployees) {
            return res.json =({message: "Usuario ya existente"})
        }

        //Encriptar la contraseña
        const passwordHash = await bcryptjs.hash(password, 10)

        //Guardar nuevo usuario
        const newClients = new clients({nameClient, lastNameClient, dui, phone, address})
        
        await newClients.save();

        //Token 
        jsonwebtoken.sign(
            //1.Guardar 
            {id: newClients._id},
            //2.Secreto
            config.JWT.secret,
            //3.Cuando expira
            {expiresIn: config.JWT.expiresIn},
            //4.Funcion flecha
            (error, token) => {
                if(error) console.log(error);
                    res.cookie("authToken", token);
                res.json({message: "Cliente Registrado"})
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export default clients