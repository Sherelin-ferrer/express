
import mongoose  from "mongoose";
import "dotenv/config.js"

let url = process.env.URI_MONGO


 mongoose.connect(url)
 .then( () => console.log(" conectado a la base de datos")

 ) .catch( error => console.log( error))

 