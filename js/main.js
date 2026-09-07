/**
 * main.js
 * Comportamiento compartido por todas las páginas (tema, menú móvil)
 * + la interacción dinámica exclusiva de la portada: el grafo de nodos.
 */

/* ---------- Tema claro / oscuro ---------- */
(function initTheme() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initialTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;
    updateToggleIcon(toggle, root.getAttribute("data-theme"));

    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateToggleIcon(toggle, next);
    });
  });

  function updateToggleIcon(el, theme) {
    el.textContent = theme === "dark" ? "☀️" : "🌙";
    el.setAttribute("aria-label", theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  }
})();

/* ---------- Menú móvil ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
});

/* ---------- Grafo de nodos (portada) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById("node-graph");
  if (!svg || typeof TEAM === "undefined") return;

  const size = 460;
  const center = size / 2;
  const hubRadius = 34;
  const orbitRadius = size / 2 - 56;
  const nodeRadius = 30;

  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);

  const ns = "http://www.w3.org/2000/svg";
  const tooltip = document.querySelector("[data-graph-tooltip]");
  const wrap = document.querySelector(".graph-wrap");

  // Posiciones de cada integrante distribuidas en círculo alrededor del hub
  const positions = TEAM.map((member, i) => {
    const angle = (i / TEAM.length) * Math.PI * 2 - Math.PI / 2;
    return {
      member,
      x: center + orbitRadius * Math.cos(angle),
      y: center + orbitRadius * Math.sin(angle),
    };
  });

  // Líneas: hub -> cada integrante, y una malla liviana entre integrantes consecutivos
  positions.forEach((p) => drawLine(center, center, p.x, p.y, `hub-${p.member.id}`));
  positions.forEach((p, i) => {
    const next = positions[(i + 1) % positions.length];
    drawLine(p.x, p.y, next.x, next.y, `mesh-${p.member.id}-${next.member.id}`, true);
  });

  // Nodo central (el equipo)
  const hub = document.createElementNS(ns, "g");
  hub.setAttribute("class", "node-hub");
  hub.innerHTML = `
    <circle cx="${center}" cy="${center}" r="${hubRadius}"></circle>
    <text x="${center}" y="${center}" text-anchor="middle" dominant-baseline="central"
      style="font-family:var(--font-mono); font-size:11px; font-weight:700;">NODOS</text>
  `;
  svg.appendChild(hub);

  // Nodos de integrantes
  positions.forEach((p) => {
    const g = document.createElementNS(ns, "g");
    g.setAttribute("class", "node-dot");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "link");
    g.setAttribute("aria-label", `Ver perfil de ${p.member.name}`);
    g.dataset.id = p.member.id;

    const bg = document.createElementNS(ns, "circle");
    bg.setAttribute("class", "node-bg");
    bg.setAttribute("cx", p.x);
    bg.setAttribute("cy", p.y);
    bg.setAttribute("r", nodeRadius);

    const label = document.createElementNS(ns, "text");
    label.setAttribute("x", p.x);
    label.setAttribute("y", p.y);
    label.textContent = p.member.initials;

    g.appendChild(bg);
    g.appendChild(label);
    svg.appendChild(g);

    const activate = () => { window.location.href = `perfil.html?id=${p.member.id}`; };
    g.addEventListener("click", activate);
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
    });

    const showTip = (evt) => {
      highlightEdgesFor(p.member.id);
      if (!tooltip || !wrap) return;
      tooltip.innerHTML = `<strong>${p.member.name}</strong><span>${p.member.role}</span>`;
      const wrapRect = wrap.getBoundingClientRect();
      const px = (p.x / size) * wrapRect.width;
      const py = (p.y / size) * wrapRect.height;
      tooltip.style.left = `${px}px`;
      tooltip.style.top = `${py - 44}px`;
      tooltip.classList.add("is-visible");
    };
    const hideTip = () => {
      clearHighlight();
      tooltip?.classList.remove("is-visible");
    };

    g.addEventListener("mouseenter", showTip);
    g.addEventListener("mouseleave", hideTip);
    g.addEventListener("focus", showTip);
    g.addEventListener("blur", hideTip);
  });

  function drawLine(x1, y1, x2, y2, id, isMesh = false) {
    const line = document.createElementNS(ns, "line");
    line.setAttribute("class", "node-link");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.dataset.linkId = id;
    if (isMesh) line.style.opacity = "0.45";
    svg.insertBefore(line, svg.firstChild);
  }

  function highlightEdgesFor(memberId) {
    svg.querySelectorAll(`[data-link-id="hub-${memberId}"]`).forEach((l) => l.classList.add("is-active"));
  }
  function clearHighlight() {
    svg.querySelectorAll(".node-link").forEach((l) => l.classList.remove("is-active"));
  }
});

/* ---------- Listado de integrantes (portada) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("team-grid");
  if (!grid || typeof TEAM === "undefined") return;

  grid.innerHTML = TEAM.map(
    (m) => `
    <a class="team-card" href="perfil.html?id=${m.id}">
      <div class="team-card-top">
        <div class="avatar" style="background:${m.accent}">${m.initials}</div>
        <div>
          <div class="team-card-name">${m.name}</div>
          <div class="team-card-role">${m.role}</div>
        </div>
      </div>
      <div class="team-card-meta">${m.city} · ${m.age} años</div>
      <span class="team-card-link">Ver perfil completo</span>
    </a>`
  ).join("");
});
