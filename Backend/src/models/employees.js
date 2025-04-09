/*
    Fields:
        name
        lasName
        phone
        assignedPosition
        branchAddressId
        passwordUser
        photoUser
*/

import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    lastName: {
      type: String,
      require: true,
    },

    phone: {
      require: true,
      min: 8,
    },

    assignedPosition: {
        type: String,
        require: true,
      },

    branchAddressId: {
        type: String,
        require: true,
      },

    passwordUser: {
      type: Number,
      require: true,
      min: 8,
    },

    photoUser: {
        type: String,
      },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("employee", employeeSchema);