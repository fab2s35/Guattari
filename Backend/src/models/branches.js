/*Branches:
  nameBranches
  emailBranches
  phoneBranches
  scheduleBranches
  addressBranches */

  import { Schema, model } from "mongoose";

  const branchesSchema = Schema({
      nameBranches: {
          type: String,
          require: [true, "El nombre de la sucursal es obligatorio"], ///Agregar mas validaciones despues
          trim: true
      },
      emailBranches: {
            type: String,
            required: [true, "El correo electrónico es obligatorio"],
            trim: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Por favor ingrese un correo electrónico válido"]
      },
      phoneBranches:{
          type: String,
          require: true,
          minLength: 8,
          maxLength: 12
      },
      scheduleBranches: {
          type: String,
          require: true
      },
      addressBranches: {
        type: String,
        require: true
    }
  }, {
      timestamps: true,
      strict: false
  })
  
  export default model("Branches", branchesSchema);