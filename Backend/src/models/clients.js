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
      require: true,
    },
    
    nameClient: {
        type: string,
        require: true,
      },

      lastNameClient: {
        type: string,
        require : true,
    },

   dui : {
        Type: Number,
        require : true,
    },

    phone : {
        type: Number,
        require : true,
    },

    address	 : {
        Type : string,
        require : false,
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Clients", clientsSchema);
