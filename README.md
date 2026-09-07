# Equipo Nodos — TP1 · Desarrollo de Sistemas Web (Front End)

Sitio grupal desarrollado como Trabajo Práctico 1 de la materia **Desarrollo de Sistemas
Web · Front End** (2do cuatrimestre 2026). El equipo se llama **Nodos**: la idea es que
cada integrante es un nodo conectado a una misma red, y esa metáfora se ve reflejada en
el grafo interactivo de la portada.

🔗 **Sitio publicado (Vercel):** https://front-tp1.vercel.app/
📁 **Repositorio:** [Repositorio](https://github.com/odv144/front-tp1)

---

## Integrantes

> Reemplazar por los perfiles de GitHub reales del equipo antes de la entrega.

| Nombre | GitHub |
|---|---|
| Omar Dario Virili | https://github.com/odv144 |
| Bruno Aguirre | https://github.com/bruno-aguirre-dev |
| Milagros Cabrera | https://github.com/mili-cabrera |
| Tomás Ledesma | https://github.com/tomas-ledesma-qa |
| Sofía Benítez | https://github.com/sofia-benitez-dev |

---

## Tecnologías utilizadas

- **HTML5** semántico (una plantilla por tipo de página).
- **CSS3** vanilla, con variables (custom properties) para theming y `@media` para el
  diseño adaptable. Sin frameworks ni librerías de CSS.
- **JavaScript vanilla** (ES6+), sin frameworks. Manipulación de DOM, `fetch`-free
  render dinámico desde un array de objetos, SVG generado por script.
- **Google Fonts**: Space Grotesk (display), Inter (texto), JetBrains Mono (detalles/UI).
- **Vercel** para el despliegue (deploy estático, sin build step).

---

## Estructura de archivos

```
equipo-nodos/
├── index.html          → Portada: hero, grafo de nodos, listado del equipo
├── perfil.html          → Plantilla ÚNICA de perfil (se completa según ?id=)
├── bitacora.html        → Registro del proceso de desarrollo
├── css/
│   └── style.css        → Tokens de diseño, tema claro/oscuro, layout, breakpoints
├── js/
│   ├── data.js           → Array de objetos con la info de cada integrante (fuente única)
│   ├── main.js            → Tema claro/oscuro, menú móvil, grafo de nodos, listado del equipo
│   └── perfil.js           → Renderiza el perfil individual a partir de data.js
├── img/                   → Reservada para imágenes propias (hoy se usan avatares CSS)
└── README.md
```

### Por qué un solo `perfil.html`
En vez de crear un archivo HTML por integrante (con el riesgo de repetir información y
que se desactualice), armamos **una sola plantilla** que lee el parámetro `?id=` de la
URL (ej. `perfil.html?id=3`) y renderiza toda la tarjeta con JavaScript, tomando los
datos del array `TEAM` en `js/data.js`. Así se cumple el pedido de la consigna de que
"toda la información personal de los integrantes se debe tomar desde un array de
objetos JSON": hay una única fuente de verdad y cero HTML escrito a mano con datos
personales.

---

## Guía de estilos

### Paleta (tema claro / tema oscuro)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--bg` | `#F5F6FA` | `#0F1117` | Fondo general |
| `--surface` | `#FFFFFF` | `#171A23` | Tarjetas, header |
| `--text` | `#14161F` | `#E8E9EE` | Texto principal |
| `--text-muted` | `#565B6B` | `#9AA0B4` | Texto secundario |
| `--primary` | `#2B2F77` | `#8B90FF` | Marca, enlaces, foco |
| `--accent` | `#E8A33D` | `#F2B705` | Detalles, hover, barras |

El tema se elige automáticamente según `prefers-color-scheme` del sistema operativo, y
puede alternarse manualmente con el botón 🌙/☀️ del header (persiste solo durante la
sesión de navegación, vía `data-theme` en `<html>`).

### Tipografía
- **Space Grotesk** — títulos y elementos de marca (`--font-display`).
- **Inter** — cuerpo de texto (`--font-body`).
- **JetBrains Mono** — etiquetas, metadatos, "eyebrows" y detalles técnicos (`--font-mono`).

### Iconografía
Emojis nativos (📍 🎂 💻 🎬 🎵 🛠️ ⭐) para no depender de una librería de íconos
externa y mantener el sitio liviano.

---

## Funciones de JavaScript (interactividad dinámica)

### Portada (`index.html` + `js/main.js`)
1. **Grafo de nodos interactivo** (`initNodeGraph`, dentro de `main.js`): dibuja un SVG
   generado por código —no es una imagen— que ubica a cada integrante en círculo
   alrededor de un nodo central ("NODOS"), usando trigonometría a partir de la cantidad
   de personas en `TEAM`. Al pasar el mouse o navegar con `Tab` sobre un nodo, se
   resalta su conexión y aparece un tooltip con nombre y rol; al hacer clic o presionar
   Enter, navega al perfil de esa persona (`perfil.html?id=X`).
   *Captura: ver `docs/screenshot-grafo.png` (agregar captura real antes de entregar).*
2. **Listado del equipo**: la grilla de tarjetas debajo del hero también se genera 100%
   por JavaScript recorriendo `TEAM`, como alternativa accesible al grafo (por si alguien
   prefiere una lista simple con enlaces directos).

### Perfil (`perfil.html` + `js/perfil.js`)
1. **Render dinámico completo**: toda la tarjeta (avatar, nombre, ciudad, edad, bio,
   habilidades, películas, discos, link a GitHub) se arma con `innerHTML` a partir del
   objeto encontrado en `TEAM` según el `id` de la URL.
2. **Barras de habilidad animadas**: cada barra arranca en 0% y se anima hasta el valor
   real (`skill.level`) al cargar la página, usando `requestAnimationFrame` + transición
   CSS.
3. **Botón "Dato curioso"**: recorre de forma cíclica el array `funFacts` de esa persona
   y cambia el texto en pantalla en cada clic, sin recargar la página.

*Captura: ver `docs/screenshot-perfil.png` (agregar captura real antes de entregar).*

### Compartido (`js/main.js`)
- Toggle de tema claro/oscuro.
- Menú de navegación colapsable en mobile (`<= 900px`).

---

## Diseño adaptable (responsive)

Breakpoints revisados, tal como pide la consigna:

- **1200px** — se ajustan paddings y la grilla de tarjetas pasa de 3 a 2 columnas.
- **900px** — el menú se convierte en desplegable, el hero pasa de 2 columnas a 1
  columna, y la página de perfil apila el avatar sobre el texto.
- **400px** — layout de una sola columna en todas las secciones, botones apilados,
  grafo de nodos reducido y metadatos del perfil centrados verticalmente.

---

## Uso de IA y criterio de privacidad

- **Herramienta y modelo:** Claude (Anthropic), plan usado por el equipo a completar
  (`<gratuito / pago>`). Experiencia previa del equipo con herramientas de IA:
  `<completar: nula / básica / frecuente>`.
- **Qué se asistió con IA:**
  - Estructura general del proyecto (organización de carpetas, plantilla única de
    perfil basada en query params) y el sistema de diseño en `css/style.css` (tokens de
    color, tipografía, tema claro/oscuro).
  - Lógica de `js/main.js` y `js/perfil.js`, incluyendo el cálculo trigonométrico de
    posiciones del grafo de nodos y el render dinámico de perfiles desde `data.js`.
  - Redacción de este README.
- **Qué revisó/adaptó el equipo con criterio propio:** `<completar antes de entregar:
  ej. "revisamos que los estilos no rompan en dispositivos reales", "ajustamos los
  textos de la bitácora para que reflejen lo que efectivamente pasó", "reemplazamos los
  datos ficticios por los del equipo real y sus GitHub", etc.>`
- **Avatares/imágenes:** no se usaron imágenes generadas por IA. Los avatares son
  iniciales sobre un color sólido, generados por CSS/JS a partir de `data.js` — una
  alternativa intencional a usar fotos personales o ilustraciones generadas.

> ⚠️ Esta sección debe completarse con la experiencia real del equipo antes de la
> entrega: qué se probó, qué se descartó y qué se hizo a mano.

---

## Evolución / próximos pasos

- Reemplazar los datos ficticios de `js/data.js` por la información real del equipo.
- Sumar fotos o avatares propios en `img/` (opcional; el sistema ya soporta reemplazar
  el círculo de iniciales por una `<img>` si el equipo lo prefiere).
- Persistir la preferencia de tema (claro/oscuro) entre sesiones.
- Sumar tests o validación de formularios si se incorpora un formulario de contacto en
  próximos TPs.
- Revisar accesibilidad con lector de pantalla real (hoy validado solo con navegación
  por teclado).
