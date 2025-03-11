import { Schema, model } from "mongoose";

let collection = "cars"
let schema = Schema(
    {
        name: { type: String, require: true },
        model: { type: Number, require: true },
        brand: { type: String, require: true },
        color: { type: String, require: true },

    }, { timestamps: true }
)
let Car = model(collection, schema)
export default Car 