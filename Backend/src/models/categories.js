/*Fields
   nameCategories
    */

    import { Schema, model } from "mongoose";

    const categoriesSchema = new Schema ({

        nameCategories:{
            type: String,
            required: [true, "Este campo es obligatorio"]
        }

    },
{
    timestamps: true, 
    strict: false
})

export default model ("categories", categoriesSchema);