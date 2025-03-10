// Definir funciones en el ámbito global
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlide;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  updateSlider();
  autoSlide = setInterval(nextSlide, 5000);

  document.querySelectorAll('.nav-btn, .dot').forEach(element => {
    element.addEventListener('click', () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 5000);
    });
  });
});