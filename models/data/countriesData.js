import  "dotenv/config.js"
import "../../config/database.js"
import city from "../countries.js"

let countries =[
    { name: "España", continent: "Europa", population: 47.5, language: "Español", currency: "Euro (€)", capital: "Madrid", area: 505990 },
    { name: "Japón", continent: "Asia", population: 125.8, language: "Japonés", currency: "Yen (¥)", capital: "Tokio", area: 377975 },
    { name: "Brasil", continent: "América", population: 214.3, language: "Portugués", currency: "Real (R$)", capital: "Brasilia", area: 8515767 },
    { name: "Canadá", continent: "América", population: 38.3, language: "Inglés y Francés", currency: "Dólar canadiense (CAD)", capital: "Ottawa", area: 9984670 },
    { name: "Egipto", continent: "África", population: 109.3, language: "Árabe", currency: "Libra egipcia (EGP)", capital: "El Cairo", area: 1002450 },
    { name: "Australia", continent: "Oceanía", population: 26.1, language: "Inglés", currency: "Dólar australiano (AUD)", capital: "Canberra", area: 7692024 },
    { name: "India", continent: "Asia", population: 1417.2, language: "Hindi e Inglés", currency: "Rupia india (₹)", capital: "Nueva Delhi", area: 3287263 },
    { name: "Francia", continent: "Europa", population: 67.8, language: "Francés", currency: "Euro (€)", capital: "París", area: 551695 },
    { name: "Sudáfrica", continent: "África", population: 59.3, language: "Inglés, Afrikáans, Zulú y otros", currency: "Rand sudafricano (ZAR)", capital: "Pretoria", area: 1221037 },
    { name: "Argentina", continent: "América", population: 45.8, language: "Español", currency: "Peso argentino (ARS)", capital: "Buenos Aires", area: 2780400 }
      ]
      
city.insertMany(countries )