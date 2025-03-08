import {Schema,model} from "mongoose";

let collection = "stories"
let schema = Schema(
    {
     title: { type: String, require: true },
     genre: { type: String, require: true },
     plot: { type: String, require: true },
     narrator: { type: String, require: true },
    }, { timestamps: true }
)
let story = model(collection,schema)
export default story