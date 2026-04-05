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