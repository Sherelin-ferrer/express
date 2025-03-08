
import  "dotenv/config.js"
import "../../config/database.js"
import Story from "../Story.js"

let stories =[
    {
        title: "El Secreto del Bosque",
        genre: "Misterio",
        plot: "Un grupo de amigos encuentra un libro antiguo que revela secretos oscuros sobre el bosque cercano.",
        characters: ["Lucas", "María", "Andrés", "El Guardián del Bosque"],
        narrator: "Un anciano que conoce la historia del bosque"
      },
      {
        title: "La Ciudad Perdida",
        genre: "Aventura",
        plot: "Un arqueólogo descubre un mapa que lo lleva a una ciudad oculta bajo la selva amazónica.",
        characters: ["Dr. Ramírez", "Isabela", "Tomás", "Los Guardianes de la Ciudad"],
        narrator: "Un diario antiguo encontrado en una expedición"
      },
      {
        title: "Sombras en la Niebla",
        genre: "Terror",
        plot: "Una familia se muda a un pueblo donde la niebla oculta presencias aterradoras.",
        characters: ["Sofía", "Carlos", "El Hombre de la Niebla", "Los Habitantes del Pueblo"],
        narrator: "Un forastero que sobrevivió al pueblo"
      },
      {
        title: "El Último Invento",
        genre: "Ciencia Ficción",
        plot: "Un científico crea una máquina del tiempo, pero descubre que el futuro está en peligro.",
        characters: ["Dr. Álvarez", "Eva", "El Consejo del Futuro", "Los Cazadores del Tiempo"],
        narrator: "Una inteligencia artificial que registra la historia"
      },
      {
        title: "Corazón de Héroe",
        genre: "Fantasía",
        plot: "Un joven descubre que es el heredero de un reino mágico en guerra.",
        characters: ["Liam", "La Reina Oscura", "Sir Galvan", "El Dragón de Cristal"],
        narrator: "Un bardo que canta sobre las hazañas del héroe"
      },
      {
        title: "La Casa del Lago",
        genre: "Romance",
        plot: "Dos almas separadas por el tiempo se comunican a través de cartas en una casa junto al lago.",
        characters: ["Elena", "Samuel", "La Anciana Misteriosa", "El Lago"],
        narrator: "El diario de la protagonista"
      },
      {
        title: "Código Omega",
        genre: "Thriller",
        plot: "Un hacker descubre una conspiración global que pone en peligro a la humanidad.",
        characters: ["Alex", "El Agente X", "Sophia", "El Líder de la Corporación"],
        narrator: "Un archivo clasificado del gobierno"
      },
      {
        title: "El Pintor de Sueños",
        genre: "Drama",
        plot: "Un artista con la capacidad de hacer que sus pinturas cobren vida lucha contra sus propios demonios.",
        characters: ["Adrián", "Lucía", "El Maestro", "Las Sombras del Pasado"],
        narrator: "Una carta escrita por el artista antes de desaparecer"
      },
      {
        title: "El Reino de Hielo",
        genre: "Fantasía",
        plot: "Una princesa debe encontrar el poder dentro de sí misma para salvar su reino de un invierno eterno.",
        characters: ["Princesa Elara", "El Mago Helado", "General Kael", "Los Guardianes del Fuego"],
        narrator: "Un antiguo libro de leyendas"
      },
      {
        title: "Conexión Perdida",
        genre: "Ciencia Ficción",
        plot: "Un astronauta en una misión a Marte pierde contacto con la Tierra y descubre algo inesperado.",
        characters: ["Capitán Reyes", "IA Athena", "Los Seres del Abismo", "La Estación Espacial"],
        narrator: "Los registros de la nave antes de su desaparición"
      }
      ]
      

Story.insertMany(stories)