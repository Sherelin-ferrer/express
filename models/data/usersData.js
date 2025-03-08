import  "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

let users =[
    { name: "Juan Pérez", email: "juan.perez@example.com", edad: 25 },
    { name: "María López", email: "maria.lopez@example.com", edad: 30 },
    { name: "Carlos Gómez", email: "carlos.gomez@example.com", edad: 28 },
    { name: "Ana Torres", email: "ana.torres@example.com", edad: 22 },
    { name: "Luis Ramírez", email: "luis.ramirez@example.com", edad: 35 },
    { name: "Sofía Mendoza", email: "sofia.mendoza@example.com", edad: 27 },
    { name: "Pedro Castillo", email: "pedro.castillo@example.com", edad: 32 },
    { name: "Laura Fernández", email: "laura.fernandez@example.com", edad: 29 },
    { name: "Javier Herrera", email: "javier.herrera@example.com", edad: 26 },
    { name: "Gabriela Ríos", email: "gabriela.rios@example.com", edad: 31 }
      ]
      

User.insertMany(users)