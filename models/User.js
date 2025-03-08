import {Schema,model} from "mongoose";

let collection = "users"
let schema = Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true },
        edad: { type: Number, require: true },
    }, { timestamps: true }
)
let user = model(collection,schema)
export default user 