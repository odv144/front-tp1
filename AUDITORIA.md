# Reporte de Auditoría de Accesibilidad Web (a11y)

Este documento detalla los estándares de accesibilidad implementados en el proyecto, asegurando compatibilidad con lectores de pantalla, navegación por teclado y preferencias del sistema operativo.

---

## 1. Estructura Semántica e Idioma (HTML)
* **Idioma:** Todas las páginas declaran correctamente `lang="es"` en la etiqueta raíz `<html>`, lo que permite a los lectores de pantalla aplicar las reglas fonéticas del español.
* **Etiquetas semánticas:** Se utilizan de forma adecuada los elementos estructurales de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), facilitando la navegación por puntos de referencia (*landmarks*).

## 2. Jerarquía de Encabezados
* **Portada (`index.html`):** Contiene un único `<h1>` ("Somos Nodos...") y secciones con `<h2>` ("El equipo"), manteniendo una jerarquía descendente lógica sin saltos de nivel.
* **Perfiles (`perfil.html`):** El nombre del integrante se renderiza como `<h1>` y las tarjetas de habilidades/preferencias usan `<h3>`, garantizando coherencia semántica.
* **Bitácora (`bitacora.html`):** Título principal en `<h2>` y entradas de la línea de tiempo en `<h3>`.

## 3. Navegación por Teclado y Foco
* **Indicador de foco visible:** El archivo `css/style.css` define un estilo claro y consistente para `:focus-visible` en enlaces, botones e inputs (`outline: 2px solid var(--accent)` con `outline-offset: 3px`), garantizando orientación visual a usuarios que navegan exclusivamente con teclado.
* **Grafo interactivo (SVG):** Los nodos interactivos en `js/main.js` incorporan `tabindex="0"`, `role="link"` y un `aria-label` descriptivo (*"Ver perfil de [Nombre]"*). Además, responden a eventos de teclado `Enter` y `Space`.

## 4. Atributos ARIA y Elementos SVG
* **SVG decorativo:** El elemento `<svg id="node-graph">` en la portada cuenta con `aria-hidden="true"`, evitando que los lectores de pantalla intenten interpretar los vectores gráficos o líneas internas.
* **Botones interactivos:**
  * El botón de cambio de tema (`.theme-toggle`) actualiza dinámicamente su `aria-label` (*"Cambiar a tema claro"* / *"Cambiar a tema oscuro"*).
  * El menú móvil (`.nav-toggle-mobile`) utiliza `aria-expanded="false"` / `"true"` para comunicar su estado al desplegarse.

## 5. Movimiento Reducido (`prefers-reduced-motion`)
Se incluye una regla global en `css/style.css` que respeta la preferencia del sistema operativo del usuario:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}

Esto desactiva animaciones y transiciones (como las barras de habilidad o el hover) para usuarios sensibles al movimiento.