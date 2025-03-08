import  "dotenv/config.js"
import "../../config/database.js"
import Food from "../food.js"

let foods =[
    { 
        name: "Pizza", 
        ingredients: "Harina, Tomate, Queso, Orégano", 
        origin: "Italia", 
        price: 10, 
        type: "Comida rápida", 
        calories: 285 
      },
      { 
        name: "Sushi", 
        ingredients: "Arroz, Pescado, Alga, Vinagre", 
        origin: "Japón", 
        price: 15, 
        type: "Gourmet", 
        calories: 200 
      },
      { 
        name: "Tacos", 
        ingredients: "Tortilla, Carne, Cilantro, Cebolla", 
        origin: "México", 
        price: 5, 
        type: "Casera", 
        calories: 250 
      },
      { 
        name: "Paella", 
        ingredients: "Arroz, Mariscos, Azafrán, Pimientos", 
        origin: "España", 
        price: 20, 
        type: "Gourmet", 
        calories: 300 
      },
      { 
        name: "Hamburguesa", 
        ingredients: "Pan, Carne, Lechuga, Tomate", 
        origin: "EE.UU.", 
        price: 8, 
        type: "Comida rápida", 
        calories: 400 
      },
      { 
        name: "Ramen", 
        ingredients: "Fideos, Caldo, Cerdo, Huevo, Cebollín", 
        origin: "Japón", 
        price: 12, 
        type: "Casera", 
        calories: 450 
      },
      { 
        name: "Arepa", 
        ingredients: "Harina de maíz, Queso, Mantequilla", 
        origin: "Venezuela", 
        price: 3, 
        type: "Casera", 
        calories: 280 
      },
    ];


Food.insertMany(foods)

