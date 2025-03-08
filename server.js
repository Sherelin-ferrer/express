import  Express, { response }  from "express";
import "dotenv/config.js"
 import "./config/database.js"

const server = Express ()

const PORT = process.env.PORT

const ready = ()=> console.log("server ready in port:"+PORT)

server.get("/shere",(request ,response) =>{response.send("Holaaa")} )

server.listen(PORT, ready); 