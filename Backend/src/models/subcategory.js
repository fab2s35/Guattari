/*
    Campos:
_id	
nameSubCategory	
idCategory	
orderStatus	
*/

import { Schema, model } from "mongoose";

const subcategorySchema = new Schema(
  {
    idsubcategory: {
      type: Number,
      require: true,
    },

    nameSubCategory: {
      type: string,
      require : true,
  },
    
  idCategory :{
        type: Schema.Types.ObjectId,
   ref: "idCategory", //Referencia a la colección de idCategory
   require: true},

   orderStatus: {
        type: Boolean,
        require: false,
      },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("subcategory", subcategorySchema);
