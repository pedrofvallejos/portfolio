// 1. Cargamos los archivos de sonido en formato .wav
const sonidoMover = new Audio('mover.wav');
const sonidoClick = new Audio('click.wav');

// Ajustamos el volumen (de 0.0 a 1.0) para que no aturda
sonidoMover.volume = 0.3;
sonidoClick.volume = 0.5;

// 2. Buscamos todos los botones y enlaces de la página
const elementosInteractivos = document.querySelectorAll('a.btn, .link-contacto, .tag');

// 3. Le asignamos los sonidos a cada elemento
elementosInteractivos.forEach(elemento => {
    
    // Cuando el mouse pasa por arriba (hover)
    elemento.addEventListener('mouseenter', () => {
        sonidoMover.currentTime = 0; 
        sonidoMover.play().catch(error => console.log("El navegador bloqueó el audio hasta que interactúes."));
    });

    // Cuando el usuario hace clic
    elemento.addEventListener('click', () => {
        sonidoClick.currentTime = 0;
        sonidoClick.play().catch(error => console.log("El navegador bloqueó el audio hasta que interactúes."));
    });
});
// 4. LÓGICA DE AUTO-DESTRUCCIÓN
const botonExplosion = document.getElementById('btn-explosion');

if (botonExplosion) {
    botonExplosion.addEventListener('click', () => {
        // Hacemos sonar el click
        sonidoClick.currentTime = 0;
        sonidoClick.play();

        // Creamos la pantalla de estática
        const overlay = document.createElement('div');
        overlay.classList.add('static-overlay');
        overlay.innerHTML = 'ERROR 404: SYSTEM CRASHED';
        document.body.appendChild(overlay);

        // A los 2.5 segundos borramos la estática y "reiniciamos"
        setTimeout(() => {
            overlay.remove();
        }, 2500);
    });
}
// 5. LÓGICA DEL MENÚ HAMBURGUESA
const menuToggle = document.getElementById('menu-toggle');
const pixelNav = document.getElementById('pixel-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && pixelNav) {
    // Abrir o cerrar menú al tocar el botón
    menuToggle.addEventListener('click', () => {
        pixelNav.classList.toggle('pixel-nav-hidden');
        sonidoClick.currentTime = 0;
        sonidoClick.play();
    });

    // Cerrar el menú y hacer ruidito al tocar cualquier opción
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            pixelNav.classList.add('pixel-nav-hidden');
            sonidoClick.currentTime = 0;
            sonidoClick.play();
        });
        
        // Efecto hover también para el menú
        link.addEventListener('mouseenter', () => {
            sonidoMover.currentTime = 0; 
            sonidoMover.play();
        });
    });
}
// 6. LÓGICA DE ANIMACIONES AVANZADAS (COHETE Y PERSONAJE EN CUERDA)

const cohete = document.getElementById('cohete-flotante');
const tipitoContainer = document.querySelector('.character-rope-container');
const body = document.body;
const html = document.documentElement;

// Función para iniciar la animación del cohete
function iniciarCohete() {
    if (cohete) {
        // Le asignamos la animación CSS y la hacemos infinita
        cohete.style.animation = 'volarConstantemente 10s linear infinite';
    }
}

// 6. LÓGICA DE EFECTOS AVANZADOS (DESCENSO Y TYPEWRITER)

// A) Lógica del Tipito al Scrollear
function actualizarDescenso() {
    const tipitoArt = document.querySelector('.pixel-character-art');
    const docHtml = document.documentElement;
    
    if (!tipitoArt) return;

    const scrollMaximo = docHtml.scrollHeight - docHtml.clientHeight;
    if (scrollMaximo <= 0) return;

    const porcentajeActual = docHtml.scrollTop / scrollMaximo;
    const posicionTop = porcentajeActual * 88; // 88% para el tipito grande

    tipitoArt.style.top = posicionTop + '%';
}

window.addEventListener('scroll', actualizarDescenso);

// B) Lógica Typewriter Masiva (Asegurada)
function iniciarEfectoEscritura() {
    const elementos = document.querySelectorAll('.maquina-escribir');
    
    elementos.forEach((elemento) => {
        const textoOriginal = elemento.textContent.trim();
        elemento.textContent = ""; // Lo vaciamos
        
        let i = 0;
        function escribir() {
            if (i < textoOriginal.length) {
                elemento.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(escribir, 35); // Un poquitito más rápido
            }
        }
        
        escribir();
    });
}

// C) Iniciamos todo al cargar la página
window.addEventListener('load', () => {
    actualizarDescenso();
    iniciarEfectoEscritura();
});