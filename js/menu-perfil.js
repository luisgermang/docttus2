document.addEventListener('DOMContentLoaded', () => {
  const profile = document.getElementById('profile');
  const dropdown = profile.querySelector('.dropdown');

  profile.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic cierre el dropdown inmediatamente
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!profile.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
});