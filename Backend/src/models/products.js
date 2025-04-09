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
      require: true,
    },
    
    nameProduct: {
        type: String,
        require: true,
      },

    description: {
        type: string,
        require : false,
    },
    codeEAN : {
        Type: Number,
        require : false,
    },
    unitPrice : {
        type: Number,
        require : true,
    },

    amount : {
        Type : Number,
        require : false,
    },
    idSubCategory :{
         type: Schema.Types.ObjectId,
    ref: "idSubCategory", //Referencia a la colección de idSubCategory
    require: true},

    idBrand :{
        type: Schema.Types.ObjectId,
   ref: "idBrand", //Referencia a la colección de idBrand
   require: true},
   idSubCategory :{

    type: Schema.Types.ObjectId,
ref: "idSuppliers", //Referencia a la colección de idSuppliers
require: true},

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Products", productsSchema);
