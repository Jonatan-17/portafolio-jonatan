// ===== CONFIGURACIÓN DE CONTACTO (EDITA AQUÍ TUS DATOS) =====
const CONFIG = {
    whatsapp: "573000000000",          // Número con código de país, sin + ni espacios
    email: "tucorreo@ejemplo.com",     // Tu correo
    github: "https://github.com/Jonatan-17",
    linkedin: ""                       // Pega tu URL de LinkedIn (si está vacío, se oculta)
};

// ===== DATOS DE PROYECTOS =====
const proyectos = {
    smartcity: {
        titulo: "SmartCity-F",
        badge: "EN DESARROLLO",
        descripcion: "Sistema automatizado para recepción, análisis y priorización de incidentes urbanos (baches, luminarias, semáforos, fugas de agua). Integra visión artificial (Google Gemini 2.5 Flash), automatización con N8N, geolocalización y notificaciones por Telegram.",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "N8N", "Gemini 2.5", "Telegram Bot", "Docker"],
        imagenes: [
            "https://placehold.co/800x500/1a1a2e/FFF?text=SmartCity+Dashboard",
            "https://placehold.co/800x500/16213e/FFF?text=Mapa+y+Geolocalizacion",
            "https://placehold.co/800x500/0f3460/FFF?text=Formulario+Reporte",
            "https://placehold.co/800x500/533483/FFF?text=Beneficios+IA"
        ],
        caracteristicas: ["Recepción de reportes ciudadanos de baches, luminarias, semáforos y fugas de agua", "Análisis de imágenes con visión artificial (Gemini 2.5 Flash)", "Priorización automática de incidentes", "Mapa con geolocalización (Leaflet.js)", "Notificaciones por Telegram"],
        github: "https://github.com/Jonatan-17/SMARCITY-J"
    },
    helpdesk: {
        titulo: "HelpDeskAI",
        badge: "EN DESARROLLO",
        descripcion: "Plataforma de gestión de tickets con IA. Clasificación automática con GPT-4, almacenamiento en PostgreSQL, notificaciones Telegram y Email, dashboard moderno con automatización N8N.",
        tecnologias: ["HTML", "CSS", "JavaScript", "N8N", "GPT-4", "PostgreSQL", "Telegram"],
        imagenes: [
            "https://placehold.co/800x500/1a1a2e/FFF?text=Workflow+N8N",
            "https://placehold.co/800x500/16213e/FFF?text=Dashboard+Tickets",
            "https://placehold.co/800x500/0f3460/FFF?text=Confirmacion+Ticket",
            "https://placehold.co/800x500/533483/FFF?text=Bot+Telegram"
        ],
        caracteristicas: ["Clasificación automática de tickets con GPT-4", "Almacenamiento en PostgreSQL", "Notificaciones por Telegram y Email", "Dashboard moderno de tickets", "Automatización completa con N8N"],
        github: "https://github.com/velascodazasergio-png/HelpDeskAI"
    },
    dontgiveup: {
        titulo: "Don't Give Up",
        badge: "EN DESARROLLO",
        descripcion: "App gamificada de finanzas personales. Dashboard de ingresos/gastos, metas de ahorro, calendario de movimientos, sistema de XP, niveles y logros para hábitos financieros.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Gamificación", "Local Storage", "Calendario"],
        imagenes: [
            "https://placehold.co/800x500/1a1a2e/FFF?text=Dashboard+Financiero",
            "https://placehold.co/800x500/16213e/FFF?text=Registro+Gastos",
            "https://placehold.co/800x500/0f3460/FFF?text=Calendario",
            "https://placehold.co/800x500/533483/FFF?text=Progreso+XP"
        ],
        caracteristicas: ["Dashboard de ingresos y gastos", "Metas de ahorro", "Calendario de movimientos", "Sistema de XP, niveles y logros", "Datos guardados en el navegador (Local Storage)"],
        github: "https://github.com/Jonatan-17/Don-t-give-up"
    },
    safeguardian: {
        titulo: "SafeGuardian",
        badge: "EN DESARROLLO",
        descripcion: "Sistema de monitoreo de conductores con webcam en tiempo real, captura de evidencia, análisis de IA y generación de reportes automatizados.",
        tecnologias: ["HTML", "CSS", "JS", "Webcam API", "N8N", "IA", "PostgreSQL"],
        imagenes: [
            "https://placehold.co/800x500/1a1a2e/FFF?text=Registro+Conductor",
            "https://placehold.co/800x500/16213e/FFF?text=Captura+Evidencia",
            "https://placehold.co/800x500/0f3460/FFF?text=Monitoreo+Vivo"
        ],
        caracteristicas: ["Monitoreo de conductores con webcam en tiempo real", "Captura de evidencia", "Análisis con IA", "Generación de reportes automatizados", "Registro de conductores"],
        github: "https://github.com/Jonatan-17/SafeGuardian"
    }
};

// ===== NAVEGACIÓN =====
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// ===== CARRUSEL =====
function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({ left: direction * 320, behavior: 'smooth' });
}

// ===== MODAL TRÁILER =====
let slideshowInterval;

function openTrailer(proyectoId) {
    const proyecto = proyectos[proyectoId];
    if (!proyecto) return;

    document.getElementById('trailer-title').textContent = proyecto.titulo;
    document.getElementById('trailer-badge').textContent = proyecto.badge;
    document.getElementById('trailer-description').textContent = proyecto.descripcion;
    document.getElementById('trailer-github').href = proyecto.github;

    document.getElementById('trailer-tech').innerHTML = proyecto.tecnologias
        .map(tech => `<span>${tech}</span>`).join('');

    // Imágenes: usa assets/images/proyectos/<id>/1.png, 2.png... y si no existen, muestra el placeholder
    document.getElementById('trailer-slideshow').innerHTML = proyecto.imagenes
        .map((ph, index) => `<img src="${rutaImg(proyectoId, (index + 1) + '.png')}" onerror="this.onerror=null;this.src='${ph}'" class="${index === 0 ? 'active' : ''}" alt="${proyecto.titulo}">`).join('');
    document.getElementById('trailer-features').innerHTML = (proyecto.caracteristicas || [])
        .map(c => `<li>${c}</li>`).join('');

    document.getElementById('trailer-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    startSlideshow(proyecto.imagenes.length);
}

function closeTrailer() {
    document.getElementById('trailer-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
    clearInterval(slideshowInterval);
}

function startSlideshow(totalImages) {
    clearInterval(slideshowInterval);
    let currentIndex = 0;
    const images = document.querySelectorAll('#trailer-slideshow img');
    slideshowInterval = setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }, 3000);
}

document.getElementById('trailer-modal').addEventListener('click', (e) => {
    if (e.target.id === 'trailer-modal') closeTrailer();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTrailer();
});


// ===== IMÁGENES LOCALES CON RESPALDO =====
// Guarda tus capturas en assets/images/proyectos/<proyecto>/ con los nombres:
//   portada.png (tarjeta), 1.png, 2.png, 3.png, 4.png (galería del tráiler)
function rutaImg(id, archivo) { return `assets/images/proyectos/${id}/${archivo}`; }

document.querySelectorAll('.project-card[data-id]').forEach(card => {
    const src = rutaImg(card.dataset.id, 'portada.png');
    const t = new Image();
    t.onload = () => { card.querySelector('.card-image').style.backgroundImage = `url('${src}')`; };
    t.src = src;
});

// ===== ENLACES DE CONTACTO =====
(function () {
    const set = (id, href) => {
        const a = document.getElementById(id);
        if (href) a.href = href; else a.style.display = 'none';
    };
    set('link-whatsapp', `https://wa.me/${CONFIG.whatsapp}`);
    set('link-email', `mailto:${CONFIG.email}`);
    set('link-github', CONFIG.github);
    set('link-linkedin', CONFIG.linkedin);
})();

// ===== MI LISTA DE SERVICIOS =====
const servicios = {
    api: "APIs e integraciones",
    auto: "Automatizaciones",
    bots: "Creación de bots",
    web: "Páginas web"
};
const lista = new Set();

function toggleLista() { document.getElementById('list-panel').classList.toggle('open'); }

function toggleServicio(id) {
    const agregado = !lista.has(id);
    if (agregado) lista.add(id); else lista.delete(id);
    renderLista();
    if (agregado && lista.size === 1) document.getElementById('list-panel').classList.add('open');
}

function renderLista() {
    document.getElementById('list-count').textContent = lista.size;
    document.getElementById('list-empty').style.display = lista.size ? 'none' : 'block';
    document.getElementById('list-items').innerHTML = [...lista]
        .map(id => `<li>${servicios[id]}<button onclick="toggleServicio('${id}')" aria-label="Quitar">✕</button></li>`).join('');
    document.querySelectorAll('.add-btn').forEach(b => {
        const on = lista.has(b.dataset.id);
        b.textContent = on ? '✓ En mi lista' : '+ Añadir a mi lista';
        b.classList.toggle('added', on);
    });
}

function enviarSolicitud(canal) {
    if (!lista.size) { alert('Agrega al menos un servicio a tu lista.'); return; }
    const detalle = document.getElementById('list-msg').value.trim();
    const msg = 'Hola Jonatan, vi tu portafolio y me interesan estos servicios:\n' +
        [...lista].map(id => '• ' + servicios[id]).join('\n') +
        (detalle ? '\n\nDetalles: ' + detalle : '');
    if (canal === 'whatsapp') window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    else window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Solicitud de servicios')}&body=${encodeURIComponent(msg)}`;
}
