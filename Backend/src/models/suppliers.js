/*Branches:
  nameSuppliers
  emailSuppliers
  phoneSuppliers
  countryOriginSuppliers */

  import { Schema, model } from "mongoose";

  const SuppliersSchema = Schema({
        nameSuppliers: {
          type: String,
          require: [true, "El nombre del proveedor es obligatorio"], 
          trim: true
      },
      emailSuppliers: {
            type: String,
            required: [true, "El correo electrónico del proveedor es obligatorio"],
            trim: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Por favor ingrese un correo electrónico válido"]
      },
      phoneSuppliers:{
          type: String,
          require: [true, "El número de teléfono del proveedor es obligatorio"],
          minLength: [8, "El número de teléfono debe tener al menos 8 dígitos"],
          maxLength: [12, "El número de teléfono no puede exceder los 12 dígitos"],
          match: [/^\d+$/, "El número de teléfono solo debe contener dígitos"]
      },
      countryOriginSuppliers: {
        type: String,
        required: [true, "El origen del proveedor es obligatorio"],
        enum: ["Nacional", "Internacional"],
        trim: true
    }
  }, {
      timestamps: true,
      strict: false
  })
  
  export default model("Suppliers", SuppliersSchema);