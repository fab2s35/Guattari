/*
    Campos:
_id	
nameClient	
lastNameClient	
dui	
phone	
address	
*/

import { Schema, model } from "mongoose";

const clientsSchema = new Schema(
  {
    idClient: {
      type: Number,
      required: true,
    },
    name: {
        type: String,
        required: true,
      },
      email:{
        type:String,
        required:true
      },

    password	 : {
        type : String,
        required : true,
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Clients", clientsSchema);
