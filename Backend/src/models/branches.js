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

      },
      emailBranches: {
            type: String,


      },
      phoneBranches:{
          type: String,

      },
      scheduleBranches: {

      },
      addressBranches: {
        type: String,

    }
  }, {
      timestamps: true,
      strict: false
  })
  
  export default model("Branches", branchesSchema);