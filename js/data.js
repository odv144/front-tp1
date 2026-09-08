/**
 * data.js
 * Fuente única de verdad para la información de las personas integrantes del equipo.
 * Todas las páginas (portada, perfiles) leen de este array. No hay datos
 * personales "hardcodeados" en el HTML: todo se renderiza desde acá vía JS.
 */

const TEAM = [
  {
    id: 1,
    name: "Omar Dario Virili",
    role: "Técnico superior en electrónica",
    city: "Villa Ocampo, Santa Fe",
    age: 42,
    github: "https://github.com/odv144",
    initials: "OV",
    accent: "#2B2F77",
    fotoPerfil: "https://avatars.githubusercontent.com/u/12345678?v=4",
    bio: "Apacionado por la electrónica y el desarrollo web, fasinado por la robótica y la Inteligencia Artificial.",
    skills: [
      { name: "HTML5 & CSS3", level: 92 },
      { name: "Java", level: 50 },
      { name: "React", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "Python", level: 60 },
    ],
    movies: ["Matrix", "Ex Machina", "Una Mente Brillante"],
    albums: ["La Esquina del Infinito — La Renga", "Signos — Soda Stereo", "Say no more — Charly García"],
    funFacts: [
      "De técnico en electrónica a programador: cambié los cables sueltos por bugs sueltos.",
      "Técnico en electrónica de día, programador de noche, fan del rock nacional las 24 horas.",
      "Soldé placas antes de soldar código, y a los dos le seguí sacando chispas.",
    ],
  },
  {
    id: 2,
    name: "Cristian Suárez",
    role: "Fullstack Developer",
    city: "CABA, Buenos Aires",
    age: 35,
    github: "https://github.com/c-suarez",
    initials: "CS",
    accent: "#E53935",
    bio: "Desarrollador Fullstack apasionado por crear soluciones eficientes. Disfruto de los buenos desafíos técnicos.",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "React", level: 80 },
    ],
    movies: ["Goodfellas", "Reservoir Dogs", "Taxi Driver"],
    albums: ["Continuum — John Mayer", "Audioslave — Audioslave", "Appetite for Destruction — Guns N' Roses"],
    funFacts: [
      "Melómano, no puedo programar sin música.",
      "Siempre me gustó la informática, pero me metí de grande a programar.",
      "Toco y enseño guitarra en mis ratos libres.",
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
    fotoPerfil: "https://avatars.githubusercontent.com/u/12345678?v=4",
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
    fotoPerfil: "https://avatars.githubusercontent.com/u/12345678?v=4",
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
];
