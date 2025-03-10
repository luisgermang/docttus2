function showTrailer(movie) {
  const popup = document.getElementById('trailer-popup');
  const video = document.getElementById('trailer-video');
  const trailers = {
    'el-padrino': 'https://iframe.mediadelivery.net/embed/195392/f94aa840-9a05-43a8-b185-baceca2e68a4?autoplay=false&loop=false&muted=false&preload=true&responsive=true',
    'interestelar': 'https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&rel=0',
    'pulp-fiction': 'https://www.youtube.com/embed/s7EdQ4FqbhY?autoplay=1&rel=0'
  };
  video.src = trailers[movie] || '';
  popup.style.display = 'flex';
}

function hideTrailer() {
  const popup = document.getElementById('trailer-popup');
  const video = document.getElementById('trailer-video');
  popup.style.display = 'none';
  video.src = '';
}