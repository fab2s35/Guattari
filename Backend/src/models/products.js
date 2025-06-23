/*
    Campos:
 _id	
nameProduct	
description	
photo	
codeEAN	
unitPrice	
amount	
idSubCategory	
idBrand	
idSuppliers	
*/

import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    idproducts: {
      type: Number,
      required: true,
    },
    
    nameProduct: {
        type: String,
        required: true,
      },

    description: {
        type: String
    },

    photo: {
      type: String,
    },

    codeEAN : {
        type: Number
    },
    unitPrice : {
        type: Number,
        required: true,
    },

    amount : {
        type : Number
    },
    idSubCategory :{
    type: Schema.Types.ObjectId,
    ref: "idSubCategory", //Referencia a la colección de idSubCategory
    required: true},

    idBrand :{
    type: Schema.Types.ObjectId,
    ref: "idBrand", //Referencia a la colección de idBrand
    required: true},

   idSupplier :{
    type: Schema.Types.ObjectId,
    ref: "idSuppliers", //Referencia a la colección de idSuppliers
    required: true},

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Products", productsSchema);
