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
    
    nameClient: {
        type: String,
        required: true,
      },

      lastNameClient: {
        type: String,
        required : true,
    },

   dui : {
        type: Number,
        required : true,
    },

    phone : {
        type: Number,
        required : true,
    },

    address	 : {
        type : String,
        required : false,
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Clients", clientsSchema);
