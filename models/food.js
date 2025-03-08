import {Schema,model} from "mongoose";

let collection = "foods"
let schema = Schema(
    {
        name: { type: String, require: true },
        ingredients: { type: String, require: true },
     origin: { type: String, require: true },
     price: { type: Number, require: true },
     type: { type: String, require: true },
     calories: { type: Number, require: true },
    }, { timestamps: true }
)
let Food = model(collection,schema)
export default Food