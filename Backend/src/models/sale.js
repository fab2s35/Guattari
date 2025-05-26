/*
    Campos:
_id	
idClient	
totalAmount	
Products	
idProducts	
quantityProducts	
paymentMethod	
idOrders	
orderStatus	
*/

import { Schema, model } from "mongoose";

const saleSchema = new Schema(
  {
    idsale: {
      type: Number,
      required: true,
    },
    
    idClient :{
        type: Schema.Types.ObjectId,
   ref: "idClient", //Referencia a la colección de idClient
   required: true},

   totalAmount: {
        type: Number,
        required: true,
      },

    Products: {
        type: String,
        required: true,
    },

    idProducts :{
        type: Schema.Types.ObjectId,
   ref: "idProducts", //Referencia a la colección de idProducts
   required: true},

    quantityProducts : {
        type: Number,
        required : true,
    },

    paymentMethod : {
        type: String,
        required: true,
    },

    idOrders :{
        type: Schema.Types.ObjectId,
   ref: "idOrders", //Referencia a la colección de idOrders
   required: true},

   orderStatus	 : {
        type : String
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("sale", saleSchema);
