/**
 * perfil.js
 * Lee ?id= de la URL, busca a la persona en el array TEAM (data.js) y
 * renderiza toda la página de perfil dinámicamente: nada de información
 * personal está escrita a mano en el HTML.
 *
 * Interacción dinámica propia del perfil:
 *  1) Las barras de habilidades se animan (de 0% al valor real) al cargar.
 *  2) Un botón "Dato curioso" recorre el array funFacts de esa persona.
 */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const member = TEAM.find((m) => m.id === id);
  const app = document.getElementById("profile-root");

  if (!member) {
    app.innerHTML = `
      <div class="card" style="text-align:center;">
        <h3>No encontramos a esta persona 🤔</h3>
        <p class="profile-bio">Puede que el enlace esté roto. Volvé a la portada para ver el listado completo del equipo.</p>
        <a class="btn btn-primary" style="margin-top:16px;" href="index.html">Volver al equipo</a>
      </div>`;
    document.title = "Perfil no encontrado — Equipo Nodos";
    return;
  }

  document.title = `${member.name} — Equipo Nodos`;

  app.innerHTML = `
    <a class="back-link" href="index.html">&larr; Volver al equipo</a>

    <div class="profile-hero">
      <div class="avatar-lg" style="background:${member.accent}">${member.initials}</div>
      <div>
        <h1 class="profile-name">${member.name}</h1>
        <p class="profile-role">${member.role}</p>
        <div class="profile-meta">
          <span>📍 ${member.city}</span>
          <span>🎂 ${member.age} años</span>
          <a href="${member.github}" target="_blank" rel="noopener">💻 GitHub ↗</a>
        </div>
        <p class="profile-bio">${member.bio}</p>
      </div>
    </div>

    <div class="profile-grid">
      <div class="card">
        <h3>🛠️ Habilidades</h3>
        ${member.skills
          .map(
            (s, i) => `
          <div class="skill-row">
            <div class="skill-label"><span>${s.name}</span><span>${s.level}%</span></div>
            <div class="skill-track"><div class="skill-fill" data-target="${s.level}" id="skill-${i}"></div></div>
          </div>`
          )
          .join("")}

        <div class="factcard">
          <p class="eyebrow">Dato curioso</p>
          <p id="fact-text" aria-live="polite" style="margin-top:8px;">${member.funFacts[0]}</p>
          <button class="btn btn-ghost" id="fact-btn" type="button">🔀 Otro dato</button>
        </div>
      </div>

      <div class="card">
        <h3>⭐ Preferencias</h3>
        <p class="fav-subtitle">Películas favoritas</p>
        <div class="tag-list">
          ${member.movies.map((m) => `<span class="tag">🎬 ${m}</span>`).join("")}
        </div>
        <p class="fav-subtitle">Discos favoritos</p>
        <div class="tag-list">
          ${member.albums.map((a) => `<span class="tag">🎵 ${a}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  // Animar barras de habilidades tras el render
  requestAnimationFrame(() => {
    document.querySelectorAll(".skill-fill").forEach((el) => {
      el.style.width = `${el.dataset.target}%`;
    });
  });

  // Botón de dato curioso: recorre el array de la persona actual
  let factIndex = 0;
  document.getElementById("fact-btn").addEventListener("click", () => {
    factIndex = (factIndex + 1) % member.funFacts.length;
    document.getElementById("fact-text").textContent = member.funFacts[factIndex];
  });
});
