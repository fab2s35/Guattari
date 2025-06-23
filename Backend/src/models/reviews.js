import { Schema, model } from "mongoose";

/* Campos:
   qualification
   comment
   idClient
   idProduct
*/

const reviewSchema = new Schema({
  qualification: {
    type: Number,
    required: true,   // ¡Ojo! Era "require", debe ser "required"
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  idClient: {
    type: Schema.Types.ObjectId,
    ref: "clients",
    required: true
  },
  idProduct: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true
  },
  estado: {
    type: String,
    default: 'pendiente'
  }
}, {
  timestamps: true,
  strict: false
});

export default model("Review", reviewSchema);
