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
      require: true,
    },
    
    idClient :{
        type: Schema.Types.ObjectId,
   ref: "idClient", //Referencia a la colección de idClient
   require: true},

   totalAmount: {
        type: Number,
        require: true,
      },

    Products: {
        type: string,
        require : true,
    },

    idProducts :{
        type: Schema.Types.ObjectId,
   ref: "idProducts", //Referencia a la colección de idProducts
   require: true},

    quantityProducts : {
        Type: Number,
        require : true,
    },

    paymentMethod : {
        type: string,
        require : true,
    },

    idOrders :{
        type: Schema.Types.ObjectId,
   ref: "idOrders", //Referencia a la colección de idOrders
   require: true},

   orderStatus	 : {
        Type : string,
        require : false,
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("sale", saleSchema);
