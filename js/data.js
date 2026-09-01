/**
 * data.js
 * Fuente única de verdad para la información de las personas integrantes del equipo.
 * Todas las páginas (portada, perfiles) leen de este array. No hay datos
 * personales "hardcodeados" en el HTML: todo se renderiza desde acá vía JS.
 *
 * NOTA: la información es ficticia, generada para cumplir con la consigna del TP1.
 */

const TEAM = [
  {
    id: 1,
    name: "Valentina Ríos",
    role: "Frontend Developer",
    city: "Rosario, Santa Fe",
    age: 22,
    github: "https://github.com/valentina-rios-dev",
    initials: "VR",
    accent: "#2B2F77",
    bio: "Convierte bocetos de Figma en interfaces que no se rompen ni a los 320px. Obsesionada con el detalle de un hover bien hecho.",
    skills: [
      { name: "HTML5 & CSS3", level: 92 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 70 },
      { name: "Accesibilidad Web", level: 65 },
    ],
    movies: ["Matrix", "Ex Machina", "Her"],
    albums: ["Discovery — Daft Punk", "OK Computer — Radiohead", "Currents — Tame Impala"],
    funFacts: [
      "Tiene 34 pestañas abiertas del mismo proyecto de CSS.",
      "Su primer 'Hola Mundo' lo escribió en una calculadora científica.",
      "Puede distinguir Helvetica de Arial a diez metros de distancia.",
    ],
  },
  {
    id: 2,
    name: "Bruno Aguirre",
    role: "Backend Developer",
    city: "Córdoba, Córdoba",
    age: 25,
    github: "https://github.com/bruno-aguirre-dev",
    initials: "BA",
    accent: "#1C6E5E",
    bio: "Diseña APIs pensando en quien las va a odiar a las 3am de un incidente: la persona del futuro que es él mismo.",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Bases de datos SQL", level: 82 },
      { name: "APIs REST", level: 85 },
      { name: "Docker", level: 60 },
    ],
    movies: ["Interestelar", "Sr. Robot (serie)", "WarGames"],
    albums: ["The Dark Side of the Moon — Pink Floyd", "In Rainbows — Radiohead", "Bahía — Louta"],
    funFacts: [
      "Nombra todas sus variables en inglés, hasta las de la lista del súper.",
      "Tiene un mate con logo de terminal de Linux.",
      "Una vez debuggeó un error durante 6 horas: era un punto y coma.",
    ],
  },
  {
    id: 3,
    name: "Milagros Cabrera",
    role: "UX/UI Designer",
    city: "Resistencia, Chaco",
    age: 21,
    github: "https://github.com/mili-cabrera",
    initials: "MC",
    accent: "#B24C1F",
    bio: "Cree que un buen diseño es el que nadie nota, porque todo funciona como uno espera. Fan de las paletas de 4 colores, ni uno más.",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Diseño de sistemas", level: 78 },
      { name: "CSS avanzado", level: 74 },
      { name: "Prototipado", level: 85 },
    ],
    movies: ["El gran hotel Budapest", "Coco", "Blade Runner 2049"],
    albums: ["Un Verano Sin Ti — Bad Bunny", "Blonde — Frank Ocean", "Vida Cotidiana — Juanes"],
    funFacts: [
      "Guarda una carpeta con 400 paletas de color 'por si acaso'.",
      "Diseñó su primer wireframe en una servilleta.",
      "No perdona un espaciado inconsistente ni en un cartel de la calle.",
    ],
  },
  {
    id: 4,
    name: "Tomás Ledesma",
    role: "QA / Tester",
    city: "Mendoza, Mendoza",
    age: 27,
    github: "https://github.com/tomas-ledesma-qa",
    initials: "TL",
    accent: "#6B3FA0",
    bio: "Su deporte favorito es encontrarle la vuelta a un formulario hasta que explote. Si algo se puede romper, él ya lo rompió.",
    skills: [
      { name: "Testing manual", level: 90 },
      { name: "Selenium", level: 75 },
      { name: "NUnit / xUnit", level: 68 },
      { name: "Documentación de bugs", level: 88 },
    ],
    movies: ["Zodiac", "Prisioneros", "La red social"],
    albums: ["El Madrileño — C. Tangana", "AM — Arctic Monkeys", "Fuego Artificial — Bandalos Chinos"],
    funFacts: [
      "Encuentra el bug crítico cinco minutos antes del deploy, siempre.",
      "Tiene una lista de 'formas raras de romper un input' con más de 50 ítems.",
      "Su frase favorita es 'en mi máquina funciona' (para reírse de ella).",
    ],
  },
  {
    id: 5,
    name: "Sofía Benítez",
    role: "Fullstack Developer",
    city: "Santa Fe, Santa Fe",
    age: 23,
    github: "https://github.com/sofia-benitez-dev",
    initials: "SB",
    accent: "#1E7A8C",
    bio: "La que conecta todos los cables: si el front no le habla al back, ella arma el puente. Le gusta entender el sistema completo.",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 72 },
      { name: "Git avanzado", level: 80 },
      { name: "Metodologías ágiles", level: 76 },
    ],
    movies: ["Whiplash", "El juego de la imitación", "Steve Jobs"],
    albums: ["Norman F***ing Rockwell — Lana del Rey", "Vida — Nathy Peluso", "Random Access Memories — Daft Punk"],
    funFacts: [
      "Resuelve conflictos de merge con la misma calma que resuelve conflictos de equipo.",
      "Tiene un board de Trello para organizar sus otros boards de Trello.",
      "Aprendió a programar para automatizar una planilla de horarios del profesorado.",
    ],
  },
];
