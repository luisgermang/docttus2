document.addEventListener('DOMContentLoaded', function() {
  const profile = document.getElementById('profile');
  const dropdown = profile.querySelector('.dropdown');

  // Toggle el dropdown al hacer clic en la imagen de perfil
  profile.addEventListener('click', function(e) {
    e.stopPropagation(); // Evita que el clic se propague al documento
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Cierra el dropdown si se hace clic fuera
  document.addEventListener('click', function() {
    dropdown.style.display = 'none';
  });
});
