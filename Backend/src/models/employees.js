/*
    Campos:
        
*/

import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    lastname: {
      type: String,
    },

    phone: {
      type: String,
      require: true,
    },

    assignedPosition: {
      type: String,
    },

    passwordUser: {
      type: String,
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("employees", employeeSchema);
