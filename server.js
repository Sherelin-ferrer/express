import  Express, { response }  from "express";
import "dotenv/config.js"
import { request } from "http";

const server = Express ()

const port = process.env.port

const ready = ()=> console.log("server ready in port:"+port)

server.get("/shere",(request ,response) =>{response.send("Holaaa")} )

server.listen(port, ready);