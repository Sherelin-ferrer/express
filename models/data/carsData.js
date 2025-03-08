
import  "dotenv/config.js"
import "../../config/database.js"
import Car from "../cars.js"

let cars =[
    { model: "2023", brand: "Toyota", name: "Corolla", color: "Rojo" },
    { model: "2022", brand: "Honda", name: "Civic", color: "Azul" },
    { model: "2021", brand: "Ford", name: "Mustang", color: "Negro" },
    { model: "2020", brand: "Chevrolet", name: "Camaro", color: "Amarillo" },
    { model: "2019", brand: "Tesla", name: "Model S", color: "Blanco" },
    { model: "2018", brand: "BMW", name: "Serie 3", color: "Gris" },
    { model: "2017", brand: "Audi", name: "A4", color: "Plateado" },
    { model: "2016", brand: "Mercedes-Benz", name: "Clase C", color: "Negro" },
    { model: "2015", brand: "Nissan", name: "Altima", color: "Azul" },
    { model: "2014", brand: "Volkswagen", name: "Jetta", color: "Verde" }
      ]
      

Car.insertMany(cars)


