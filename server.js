import  express from "express";
import "dotenv/config.js"
 import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/indexRouter.js";



const server = express ()

const PORT = process.env.PORT

const ready = ()=> console.log("server ready in port:"+PORT)

//CONFIGURACIONES BASICAS DEL SERVIDOR:

// activar datos complejos en la url
server.use(express.urlencoded({extended:true})) 

// manejar formato json
server.use(express.json()) 

// se encarga de la seguridad  (npm install cors)
server.use(cors())

// libreria orden de registros (npm install morgan)
server.use(morgan('dev'))

//Configurar Enrutador
server.use('/api',indexRouter)

//server.use(not_fo)

server.listen(PORT, ready); 