const corazon = document.getElementById('corazon');
const palabrasDiv = document.getElementById('palabras');

// Tus palabras dedicadas (puedes modificar)
const palabras = [
  "Eres mi sol ☀️",
  "Mi alegría infinita 💕",
  "Contigo todo es perfecto 🌸",
  "Te amo hasta el infinito ❤️"
];

corazon.addEventListener('click', () => {
  // Latido del corazón
  corazon.style.animation = 'latido 0.8s ease-in-out 1';

  // Espera a que termine el latido
  setTimeout(() => {
    // Explosión del corazón
    corazon.style.animation = 'explotar 0.6s forwards';

    // Mostrar palabras una a una
    palabrasDiv.innerHTML = '';
    palabras.forEach((palabra, i) => {
      setTimeout(() => {
        const span = document.createElement('div');
        span.textContent = palabra;
        span.style.opacity = 0;
        span.style.transition = 'opacity 0.5s';
        palabrasDiv.appendChild(span);
        setTimeout(() => span.style.opacity = 1, 50);
      }, i * 700);
    });

  }, 800); // coincide con la duración del latido
});