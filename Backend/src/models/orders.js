/*Fields
   idClient
   idProducts
   total
    */

   import { Schema, model } from "mongoose";

   const ordersSchema = new Schema ({
       
       idClient:{
           type: String,
           ref: "Clients", //Referencia a la colección de Clients
           require: true
       },
       products:[
        {
            idProduct:{
                type: Schema.Types.ObjectId,
                ref: "Products", //Referencia a la colección de Products
                required: true
            },
            quantity:{
                type: Number,
                min: [1, "La cantidad mínima es 1"],
                required: true
            },
            subtotal:{
                type: Number,
                min: [0, "El total no puede ser negativo"],
                required: true
            },
        },
     ],
        total:{
            type: Number,
            require: [true, "El total es obligatorio"],
            min: [0, "El total no puede ser negativo"],
        },

        status:{
            type: String,
            enum: {
            values: ["Pending", "Paid", "Delivered"],
            message: "El estado debe ser uno de los siguientes valores: Pending, Paid o Delivered"
            },
            default: "Pendiente"
        },

   },
{
   timestamps: true, 
   strict: false
})

export default model ("orders", ordersSchema);