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
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,  
      required: true,
      minlength: 8,
    },
    assignedPosition: {
      type: String,
      required: true,
    },
 
    passwordUser: {
      type: String,  
      required: true,
      minlength: 8,
    },
 
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("employee", employeeSchema);
 
 
