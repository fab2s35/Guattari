/*Fields
   nameBrand
    */

   import { Schema, model } from "mongoose";

   const brandsSchema = new Schema ({

       nameBrand:{
           type: String,
           require: true
       }

   },
{
   timestamps: true, 
   strict: false
})

export default model ("brands", brandsSchema);