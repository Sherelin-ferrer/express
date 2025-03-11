import { Router } from "express";
import allCarscontrollers from "../controllers/cars/read.js"

const routerCars = Router()

routerCars.get('/allCars',allCarscontrollers)



export default routerCars