
import mongoose  from "mongoose";
import "dotenv/config.js"

let url = process.env.URL_MONGO
console.log(url)

 mongoose.connect(url)
 .then( () => console.log(" conectado a la base de datos")

 ) .catch( error => console.log( error))

 