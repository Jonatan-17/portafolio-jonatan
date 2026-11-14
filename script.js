// ===== DATOS DE CONTACTO =====
const CONFIG = {
    nombre: "Jonatan",
    whatsapp: "573023647730",            // código de país + número, sin + ni espacios
    email: "jonatandavidsarmientosierra@gmail.com",
    github: "https://github.com/Jonatan-17",
    linkedin: "https://www.linkedin.com/in/jonatan-sarmiento-16a206366/",
    cv: "assets/docs/HDV_Jonatan_Sarmiento.pdf" // hoja de vida (español e inglés)
};

const MENSAJES = {
    contacto: "Hola Jonatan, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad.",
};

const enlaceWhatsApp = (texto) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
const enlaceGmail = (asunto, cuerpo = "") =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${CONFIG.email}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
const enlaceMailto = (asunto, cuerpo = "") =>
    `mailto:${CONFIG.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

// ===== PROYECTOS =====
// imagenes: capturas reales en assets/proyectos/<id>/ (jpg) o la portada generada (portada.svg)
const BADGES = {
    terminado: ["TERMINADO", "badge-done"],
    equipo: ["EN EQUIPO", "badge-team"],
    hackaton: ["HACKATÓN", "badge-hack"],
    nuevo: ["NUEVO", "badge-new"],
};

const proyectos = {
    campusdesk: {
        titulo: "CampusDesk",
        tagline: "Mesa de ayuda de TI con roles y SLA",
        badge: "equipo",
        anio: 2026,
        genero: "Backend · API REST",
        descripcion: "Plataforma web de gestión de incidencias tecnológicas: centraliza las solicitudes de soporte, controla su ciclo de vida (abierto → asignado → en progreso → resuelto → cerrado) y protege la información según el rol de cada usuario.",
        miParte: "Equipo de 4 personas. Yo hice la seguridad con JWT, el registro y login, la gestión de usuarios y técnicos, los indicadores del panel, CORS, Swagger y el manejo de errores, con sus pruebas. Además agregué la extensión de SLA por prioridad.",
        caracteristicas: [
            "Login con JWT y permisos por rol (administrador, técnico y usuario)",
            "Ciclo de vida de tickets con historial de auditoría y comentarios",
            "Fecha límite automática según la prioridad (SLA) y consulta de vencidos",
            "Panel con indicadores y API documentada con Swagger",
            "Más de 200 pruebas automáticas y PostgreSQL con Docker",
        ],
        tecnologias: ["Java 21", "Spring Boot", "Spring Security", "JWT", "JPA", "PostgreSQL", "Docker", "Swagger", "JavaScript"],
        github: "https://github.com/Jonatan-17/campusdesk",
        imagenes: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    },
    recetas: {
        titulo: "Recetas RAG",
        tagline: "Cocina con lo que tienes, con IA",
        badge: "equipo",
        anio: 2026,
        genero: "Backend · IA",
        descripcion: "Escribes los ingredientes que tienes y la aplicación sugiere recetas usando búsqueda semántica (RAG): explica cómo prepararlas y te dice qué ingredientes te faltan. Las recetas se pueden guardar en favoritos.",
        miParte: "Proyecto en pareja con Michael Santos.",
        caracteristicas: [
            "Búsqueda semántica en Qdrant con embeddings de OpenRouter",
            "El modelo explica la receta usando solo las recetas encontradas",
            "Cálculo de ingredientes faltantes y lista de favoritos",
            "API REST en Spring Boot con PostgreSQL",
        ],
        tecnologias: ["Spring Boot", "Java 21", "PostgreSQL", "n8n", "Qdrant", "OpenRouter", "JavaScript"],
        github: "https://github.com/Jonatan-17/recetas-rag",
        imagenes: ["1.jpg"],
    },
    smartcity: {
        titulo: "SmartCity-F",
        tagline: "Reportes urbanos inteligentes con IA",
        badge: "terminado",
        anio: 2026,
        genero: "IA · Automatización",
        descripcion: "Sistema para recibir, analizar y priorizar daños urbanos (baches, luminarias, semáforos, fugas de agua). El ciudadano reporta con foto y GPS, la IA clasifica el daño y su prioridad, y un bot de Telegram informa el estado del ticket.",
        caracteristicas: [
            "Formulario con geolocalización y carga de fotos",
            "Clasificación con visión artificial (Gemini 2.5 Flash) y filtro anti-spam",
            "Detección de reportes duplicados en un radio de 20 metros",
            "Notificaciones urgentes y bot de consulta en Telegram",
            "Registro automático en Google Sheets y panel de métricas",
        ],
        tecnologias: ["n8n", "Google Gemini", "Telegram Bot", "Leaflet.js", "JavaScript", "Docker"],
        github: "https://github.com/Jonatan-17/smartcity-f",
        imagenes: ["1.jpg", "2.jpg"],
    },
    safeguardian: {
        titulo: "SafeGuardian",
        tagline: "Detección de fatiga en conductores",
        badge: "hackaton",
        anio: 2026,
        genero: "Visión por computador",
        descripcion: "Monitoreo de conductores que detecta señales de fatiga y somnolencia en fotos o videos cortos tomados durante el recorrido. Si el riesgo es alto, avisa al supervisor y deja todo registrado para auditoría.",
        caracteristicas: [
            "Captura de evidencia con la cámara del navegador (WebRTC)",
            "Detección de ojos cerrados con MediaPipe (Eye Aspect Ratio) en FastAPI",
            "Flujo de 22 pasos en n8n con motor de riesgo y manejo de errores",
            "Alertas por Telegram y Gmail, y registro en Google Sheets",
        ],
        tecnologias: ["Python", "FastAPI", "MediaPipe", "OpenCV", "n8n", "JavaScript"],
        github: "https://github.com/Jonatan-17/SafeGuardian",
        imagenes: ["portada.svg"],
    },
    helpdesk: {
        titulo: "HelpDeskAI",
        tagline: "Gestión de tickets con IA",
        badge: "equipo",
        anio: 2026,
        genero: "IA · Automatización",
        descripcion: "Plataforma de gestión de tickets con clasificación automática por IA, almacenamiento en PostgreSQL, notificaciones por Telegram y correo, y un panel para seguir cada caso.",
        miParte: "Proyecto en equipo; el repositorio está en la cuenta de un compañero.",
        caracteristicas: [
            "Clasificación automática de tickets con GPT-4",
            "Almacenamiento en PostgreSQL",
            "Notificaciones por Telegram y correo",
            "Automatización completa con n8n",
        ],
        tecnologias: ["n8n", "GPT-4", "PostgreSQL", "Telegram", "JavaScript"],
        github: "https://github.com/velascodazasergio-png/HelpDeskAI",
        imagenes: ["portada.svg"],
    },
    gamerjpa: {
        titulo: "Gamer JPA",
        tagline: "Modelo de datos con Spring Data JPA",
        badge: "terminado",
        anio: 2026,
        genero: "Backend · Persistencia",
        descripcion: "Base de datos de videojuegos con Spring Boot y Spring Data JPA: desarrolladores, géneros, videojuegos y logros, con relaciones uno a muchos y muchos a uno.",
        caracteristicas: [
            "Entidades y relaciones JPA bien definidas",
            "PostgreSQL con Docker y variables de entorno",
            "Pruebas de repositorio con base H2 en memoria",
        ],
        tecnologias: ["Java 21", "Spring Boot", "Spring Data JPA", "PostgreSQL", "H2", "Gradle"],
        github: "https://github.com/Jonatan-17/gamer-jpa",
        imagenes: ["portada.svg"],
    },
    coworking: {
        titulo: "CoworkingDB",
        tagline: "La lógica de negocio dentro de MySQL",
        badge: "terminado",
        anio: 2026,
        genero: "Bases de datos",
        descripcion: "Base de datos relacional de un espacio de coworking: usuarios, empresas, membresías, reservas, facturación, accesos y auditoría. Gran parte de la lógica vive en el propio motor.",
        caracteristicas: [
            "15 tablas normalizadas con llaves foráneas e índices",
            "20 triggers, 20 eventos, 20 funciones, 20 procedimientos y 20 vistas",
            "Roles y permisos por tipo de usuario",
            "Script maestro que instala y verifica todo",
        ],
        tecnologias: ["MySQL 8", "SQL", "Triggers", "Procedimientos", "Eventos"],
        github: "https://github.com/Jonatan-17/coworking-db",
        imagenes: ["portada.svg"],
    },
    dontgiveup: {
        titulo: "Don't Give Up",
        tagline: "Finanzas personales gamificadas",
        badge: "terminado",
        anio: 2026,
        genero: "Frontend",
        descripcion: "Aplicación web para organizar las finanzas personales: ingresos y gastos, metas de ahorro, calendario, simulador de ahorro y un sistema de experiencia, rachas y logros para crear el hábito.",
        caracteristicas: [
            "Panel de ingresos, gastos, ahorro y dinero libre",
            "Metas de ahorro con progreso y simulador mensual y diario",
            "Calendario de movimientos y gráfico de gastos",
            "XP, rachas, logros y modo claro u oscuro",
        ],
        tecnologias: ["HTML", "CSS", "JavaScript", "Canvas", "Local Storage"],
        github: "https://github.com/Jonatan-17/Don-t-give-up",
        demo: "https://don-t-give-up.vercel.app",
        imagenes: ["1.jpg"],
    },
    music: {
        titulo: "Mega Music App",
        tagline: "Streaming y tienda de música",
        badge: "equipo",
        anio: 2026,
        genero: "Frontend",
        descripcion: "Interfaz en modo oscuro que une el streaming de música con la compra de álbumes digitales: tienda, detalle de álbum, reproductor, carrito, pago y confirmación.",
        miParte: "Equipo de 3 personas. Yo hice las vistas de detalle de álbum y del reproductor, con sus estilos.",
        caracteristicas: [
            "6 vistas con HTML5 semántico",
            "CSS modular con variables de diseño",
            "Reproductor inmersivo y flujo de compra completo",
        ],
        tecnologias: ["HTML5", "CSS3", "Diseño responsive"],
        github: "https://github.com/Jonatan-17/mega-music-app",
        imagenes: ["portada.svg"],
    },
    aeropuerto: {
        titulo: "Sistema de Aeropuerto",
        tagline: "Programación orientada a objetos en Java",
        badge: "terminado",
        anio: 2026,
        genero: "Java · POO",
        descripcion: "Aplicación de consola para gestionar aeropuertos, vuelos, pasajeros y reservas, aplicando herencia, polimorfismo, genéricos, excepciones propias y colecciones.",
        caracteristicas: ["Reservas con control de capacidad", "Estados de vuelo con enum", "Estadísticas con List, Set y Map"],
        tecnologias: ["Java", "POO", "Colecciones"],
        github: "https://github.com/Jonatan-17/SistemaAeropuerto",
        imagenes: ["portada.svg"],
    },
    gastos: {
        titulo: "Gestor de Gastos",
        tagline: "Finanzas en consola con Python",
        badge: "terminado",
        anio: 2026,
        genero: "Python",
        descripcion: "Aplicación de consola para registrar gastos, filtrarlos por categoría o fecha, calcular totales y generar reportes en JSON.",
        caracteristicas: ["Validación de datos", "Totales diarios, semanales y mensuales", "Reportes por categoría"],
        tecnologias: ["Python", "JSON", "tabulate"],
        github: "https://github.com/Jonatan-17/gestor-gastos-python",
        imagenes: ["portada.svg"],
    },
};

const FILAS = [
    { titulo: "Top 3 en el portafolio de Jonatan", top: true, ids: ["campusdesk", "recetas", "smartcity"] },
    { titulo: "Backend y APIs", ids: ["campusdesk", "recetas", "gamerjpa", "coworking", "aeropuerto"] },
    { titulo: "Inteligencia artificial y automatización", ids: ["smartcity", "safeguardian", "recetas", "helpdesk"] },
    { titulo: "Frontend y más", ids: ["dontgiveup", "music", "gastos"] },
];

const rutaImg = (id, archivo) => `assets/proyectos/${id}/${archivo}`;
const portada = (id) => rutaImg(id, proyectos[id].imagenes[0]);

// ===== FILAS DE PROYECTOS =====
function tarjeta(id, puesto) {
    const p = proyectos[id];
    const [badgeTxt, badgeCls] = BADGES[p.badge];
    const card = `
        <button class="project-card" data-id="${id}" aria-label="Ver detalles de ${p.titulo}">
            <div class="card-image" style="background-image:url('${portada(id)}')">
                <span class="card-badge ${badgeCls}">${badgeTxt}</span>
                <span class="card-title-art">${p.titulo}</span>
                <span class="card-overlay"><span class="play-icon">▶</span></span>
            </div>
            <div class="card-info">
                <h3>${p.titulo}</h3>
                <p>${p.tagline}</p>
                <div class="card-tech">${p.tecnologias.slice(0, 3).map(t => `<span>${t}</span>`).join("")}</div>
            </div>
        </button>`;
    return puesto ? `<div class="top-item"><span class="top-number">${puesto}</span>${card}</div>` : card;
}

function renderFilas() {
    document.getElementById("rows").innerHTML = FILAS.map((fila, i) => `
        <div class="carousel-section">
            <h2 class="section-title">${fila.titulo}</h2>
            <div class="carousel-container">
                <button class="carousel-btn prev" data-row="${i}" data-dir="-1" aria-label="Anterior">‹</button>
                <div class="carousel ${fila.top ? "carousel-top" : ""}" id="row-${i}">
                    ${fila.ids.map((id, n) => tarjeta(id, fila.top ? n + 1 : 0)).join("")}
                </div>
                <button class="carousel-btn next" data-row="${i}" data-dir="1" aria-label="Siguiente">›</button>
            </div>
        </div>`).join("");
}

// ===== MODAL TRÁILER =====
let slideshowInterval;

function openTrailer(id) {
    const p = proyectos[id];
    if (!p) return;
    const [badgeTxt, badgeCls] = BADGES[p.badge];
    document.getElementById("trailer-title").textContent = p.titulo;
    const badge = document.getElementById("trailer-badge");
    badge.textContent = badgeTxt;
    badge.className = `trailer-badge ${badgeCls}`;
    document.getElementById("trailer-meta").innerHTML =
        `<span class="match">${p.genero}</span><span>${p.anio}</span><span class="hd">${p.tecnologias[0].toUpperCase()}</span>`;
    document.getElementById("trailer-description").textContent = p.descripcion;
    document.getElementById("trailer-role").innerHTML = p.miParte
        ? `<h4 class="trailer-h">Mi parte</h4><p class="trailer-description">${p.miParte}</p>` : "";

    const pedido = `Hola Jonatan, vi tu proyecto ${p.titulo} en tu portafolio y me interesa algo similar.`;
    document.getElementById("trailer-buttons").innerHTML =
        `<a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">▶ Ver en GitHub</a>` +
        (p.demo ? `<a class="btn btn-secondary" href="${p.demo}" target="_blank" rel="noopener">🌐 Ver demo</a>` : "") +
        `<a class="btn btn-secondary" href="${enlaceWhatsApp(pedido)}" target="_blank" rel="noopener">💬 Quiero algo así</a>`;

    document.getElementById("trailer-features").innerHTML = p.caracteristicas.map(c => `<li>${c}</li>`).join("");
    document.getElementById("trailer-tech").innerHTML = p.tecnologias.map(t => `<span>${t}</span>`).join("");
    document.getElementById("trailer-slideshow").innerHTML = p.imagenes
        .map((img, i) => `<img src="${rutaImg(id, img)}" class="${i === 0 ? "active" : ""}" alt="${p.titulo}: imagen ${i + 1}">`).join("");
    document.getElementById("trailer-dots").innerHTML = p.imagenes.length > 1
        ? p.imagenes.map((_, i) => `<button data-slide="${i}" class="${i === 0 ? "active" : ""}" aria-label="Imagen ${i + 1}"></button>`).join("") : "";

    document.getElementById("trailer-modal").classList.add("active");
    document.body.style.overflow = "hidden";
    startSlideshow();
}

function showSlide(n) {
    const imgs = document.querySelectorAll("#trailer-slideshow img");
    const dots = document.querySelectorAll("#trailer-dots button");
    imgs.forEach((im, i) => im.classList.toggle("active", i === n));
    dots.forEach((d, i) => d.classList.toggle("active", i === n));
}

function startSlideshow() {
    clearInterval(slideshowInterval);
    const total = document.querySelectorAll("#trailer-slideshow img").length;
    if (total < 2) return;
    let current = 0;
    slideshowInterval = setInterval(() => { current = (current + 1) % total; showSlide(current); }, 3500);
}

function closeTrailer() {
    document.getElementById("trailer-modal").classList.remove("active");
    document.body.style.overflow = "";
    clearInterval(slideshowInterval);
}

// ===== MI LISTA DE SERVICIOS =====
const servicios = { api: "Backend y APIs", auto: "Automatizaciones", bots: "Bots e IA", web: "Páginas web" };
const lista = new Set();

function toggleLista(abrir) {
    document.getElementById("list-panel").classList.toggle("open", abrir);
}

function toggleServicio(id) {
    const agregado = !lista.has(id);
    if (agregado) lista.add(id); else lista.delete(id);
    renderLista();
    if (agregado && lista.size === 1) toggleLista(true);
}

function renderLista() {
    document.getElementById("list-count").textContent = lista.size;
    document.getElementById("list-empty").style.display = lista.size ? "none" : "block";
    document.getElementById("list-warn").hidden = true;
    document.getElementById("list-items").innerHTML = [...lista]
        .map(id => `<li>${servicios[id]}<button data-remove="${id}" aria-label="Quitar ${servicios[id]}">✕</button></li>`).join("");
    document.querySelectorAll(".add-btn").forEach(b => {
        const on = lista.has(b.dataset.id);
        b.textContent = on ? "✓ En mi lista" : "+ Añadir a mi lista";
        b.classList.toggle("added", on);
    });
}

function enviarSolicitud(canal) {
    if (!lista.size) { document.getElementById("list-warn").hidden = false; return; }
    const detalle = document.getElementById("list-msg").value.trim();
    const msg = "Hola Jonatan, vi tu portafolio y me interesan estos servicios:\n" +
        [...lista].map(id => "• " + servicios[id]).join("\n") +
        (detalle ? "\n\nDetalles: " + detalle : "");
    const asunto = "Solicitud de servicios desde tu portafolio";
    if (canal === "whatsapp") window.open(enlaceWhatsApp(msg), "_blank", "noopener");
    else if (canal === "gmail") window.open(enlaceGmail(asunto, msg), "_blank", "noopener");
    else window.location.href = enlaceMailto(asunto, msg);
}

// ===== UTILIDADES =====
function toast(texto) {
    const t = document.getElementById("toast");
    t.textContent = texto;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
}

// ===== INICIO =====
document.addEventListener("DOMContentLoaded", () => {
    renderFilas();
    document.getElementById("year").textContent = new Date().getFullYear();

    // Enlaces de contacto
    document.querySelectorAll("[data-whatsapp]").forEach(a => { a.href = enlaceWhatsApp(MENSAJES[a.dataset.whatsapp]); });
    document.getElementById("contact-gmail").href = enlaceGmail("Contacto desde tu portafolio", "Hola Jonatan, ");
    document.getElementById("contact-mailto").href = enlaceMailto("Contacto desde tu portafolio", "Hola Jonatan, ");
    document.getElementById("contact-linkedin").href = CONFIG.linkedin;
    document.getElementById("contact-github").href = CONFIG.github;
    if (CONFIG.cv) { const cv = document.getElementById("btn-cv"); cv.href = CONFIG.cv; cv.hidden = false; cv.setAttribute("download", ""); }
    document.getElementById("copy-email").addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(CONFIG.email); toast("Correo copiado ✓"); }
        catch { toast(CONFIG.email); }
    });

    // Navbar y menú móvil
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));
    const menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", () => {
        const abierto = navbar.classList.toggle("menu-open");
        menuBtn.setAttribute("aria-expanded", abierto);
    });
    document.querySelectorAll("#nav-links a").forEach(a => a.addEventListener("click", () => navbar.classList.remove("menu-open")));

    // Carruseles y tarjetas
    document.getElementById("rows").addEventListener("click", (e) => {
        const btn = e.target.closest(".carousel-btn");
        if (btn) {
            const row = document.getElementById(`row-${btn.dataset.row}`);
            row.scrollBy({ left: Number(btn.dataset.dir) * row.clientWidth * 0.8, behavior: "smooth" });
            return;
        }
        const card = e.target.closest(".project-card");
        if (card) openTrailer(card.dataset.id);
    });

    // Modal
    document.getElementById("close-trailer").addEventListener("click", closeTrailer);
    document.getElementById("trailer-modal").addEventListener("click", (e) => { if (e.target.id === "trailer-modal") closeTrailer(); });
    document.getElementById("trailer-dots").addEventListener("click", (e) => {
        const d = e.target.closest("[data-slide]");
        if (d) { showSlide(Number(d.dataset.slide)); startSlideshow(); }
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeTrailer(); toggleLista(false); } });

    // Mi lista
    document.querySelectorAll(".add-btn").forEach(b => b.addEventListener("click", () => toggleServicio(b.dataset.id)));
    document.getElementById("list-fab").addEventListener("click", () => toggleLista());
    document.getElementById("close-list").addEventListener("click", () => toggleLista(false));
    document.getElementById("list-items").addEventListener("click", (e) => {
        const r = e.target.closest("[data-remove]");
        if (r) toggleServicio(r.dataset.remove);
    });
    document.querySelectorAll("[data-send]").forEach(b => b.addEventListener("click", () => enviarSolicitud(b.dataset.send)));
    renderLista();
});
