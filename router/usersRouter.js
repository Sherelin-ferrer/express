import { Router } from "express";
import allUsercontrollers from "../controllers/user/read.js"

const routerUsers = Router()

routerUsers.get('/allUsers',allUsercontrollers)



export default routerUsers