import { Router } from "express";
import routerUsers from "./usersRouter.js"
import routerCars from "./carsRouter.js"
import routerCountries from "./countriesRouter.js"
import routerFood from "./foodRouter.js"
import routerStory from "./storiesRouter.js"

let routerIndex = Router()
routerIndex.use('/usersRouter',routerUsers)
routerIndex.use('/carsRouter',routerCars)
routerIndex.use('/countriesRouter',routerCountries)
routerIndex.use('/foodRouter',routerFood)
routerIndex.use('/storiesRouter',routerStory)

export default routerIndex

