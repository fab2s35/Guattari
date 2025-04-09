/*Fields
   products
   idUser
   total
    */

   import { Schema, model } from "mongoose";

   const shoppingCartSchema = new Schema ({

        idUser:{
             type: Schema.Types.ObjectId,
            ref: "Users", //Referencia a la colección de Users
            required: [true, "El id del usuario es obligatorio"],
        },
       
       products:[
           {
               idProduct:{
                   type: Schema.Types.ObjectId,
                   ref: "Products", //Referencia a la colección de Products
                   required: [true, "El id del producto es obligatorio"],
               },
               quantity:{
                   type: Number,
                   min: [1, "La cantidad mínima es 1"],
                   required: [true, "La cantidad es obligatoria"],
               },
               subtotal:{
                   type: Number,
                   min: [0, "El total no puede ser negativo"],
                   required: [true, "El subtotal es obligatorio"],
               },
           },
        ],
        
        total:{
            type: Number,
            required: [true, "El total es obligatorio"],
            min: [0, "El total no puede ser negativo"],
        },

        
   },
{
   timestamps: true, 
   strict: false
})

export default model ("shoppingCart", shoppingCartSchema);