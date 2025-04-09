/*Campos:
qualification
coment
idClients
idProducts */

import {Schema, model} from "mongoose";

const reviewSchema = new Schema(
    {
        qualification:{
            type: Number,
            requiere: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            require: true
        },
        idClient:{
            type: Schema.Types.ObjectId,
            ref: "clients",
            requiere: true
        },
        idProducts:{
            type: Schema.Types.ObjectId,
            ref: "products",
            requiere: true
        }
    }, {
        timestamps: true,
        strict: false
    }
);

export default model("Review", reviewSchema);