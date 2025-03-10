// Carrusel de películas destacadas
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.movies-track');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const itemWidth = document.querySelector('.movie-item').offsetWidth + 15; // Ancho + gap

  let scrollPosition = 0;

  nextBtn.addEventListener('click', () => {
    const trackWidth = track.scrollWidth;
    const visibleWidth = track.offsetWidth;
    scrollPosition += itemWidth * 2; // Desplaza 2 elementos
    if (scrollPosition > trackWidth - visibleWidth) {
      scrollPosition = trackWidth - visibleWidth;
    }
    track.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    scrollPosition -= itemWidth * 2; // Desplaza 2 elementos hacia atrás
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    track.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });
});