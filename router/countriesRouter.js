import { Router } from "express";
import allCountriescontrollers from "../controllers/countries/read.js"

const routerCountries = Router()

routerCountries.get('/allCountries',allCountriescontrollers)



export default routerCountries