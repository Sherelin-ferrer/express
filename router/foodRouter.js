import { Router } from "express";
import allFoodcontrollers from "../controllers/food/read.js"

const routerFood = Router()

routerFood.get('/allFood',allFoodcontrollers)



export default routerFood