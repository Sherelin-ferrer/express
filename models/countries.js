import {Schema,model} from "mongoose";

let collection = "countries"
let schema = Schema(
    {
        name: { type: String, require: true },
        continent: { type: String, require: true },
        population: { type:Number, require: true },
        language: { type: String, require: true },
        currency: { type: String, require: true },
        capital: { type: String, require: true },
        area: { type: Number, require: true },
    }, { timestamps: true }
)
let city = model(collection,schema)
export default city