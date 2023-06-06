// Obtener las diapositivas y los botones de navegación
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

// Función para mostrar la diapositiva actual
function showSlide() {
  // Ocultar todas las diapositivas
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Mostrar la diapositiva actual
  slides[currentSlide].style.display = 'block';
}

// Función para pasar a la diapositiva anterior
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// Función para pasar a la siguiente diapositiva
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Agregar eventos de clic a los botones de navegación
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Mostrar la primera diapositiva al cargar la página
showSlide();
