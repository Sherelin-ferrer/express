import { Router } from "express";
import allStoriescontrollers from "../controllers/story/read.js"

const routerStory = Router()

routerStory.get('/allFood',allStoriescontrollers)



export default routerStory