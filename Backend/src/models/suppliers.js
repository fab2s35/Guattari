/*Branches:
  nameSuppliers
  emailSuppliers
  phoneSuppliers
  countryOriginSuppliers */

  import { Schema, model } from "mongoose";

  const SuppliersSchema = Schema({
        nameSuppliers: {
          type: String,
      },
      emailSuppliers: {
            type: String,

      },
      phoneSuppliers:{
          type: String,

      },
      nationality: {
        type: String,

    }
  }, {
      timestamps: true,
      strict: false
  })
  
  export default model("Suppliers", SuppliersSchema);