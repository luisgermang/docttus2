document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const mobileSearchMenu = document.getElementById('mobile-search-menu');
  const searchInputDesktop = document.getElementById('search-input');

  // Función para manejar el clic en el botón de búsqueda
  searchButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      // Móvil: alternar el mobile-search-menu
      mobileSearchMenu.classList.toggle('show');
      if (mobileSearchMenu.classList.contains('show')) {
        mobileSearchMenu.querySelector('input').focus();
      }
    } else {
      // Escritorio: alternar el input dentro del topbar
      searchInputDesktop.classList.toggle('hidden');
      if (!searchInputDesktop.classList.contains('hidden')) {
        searchInputDesktop.focus();
      }
    }
  });

  // Cerrar el buscador al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!mobileSearchMenu.contains(e.target) && !searchButton.contains(e.target)) {
      mobileSearchMenu.classList.remove('show');
    }
    if (!searchInputDesktop.contains(e.target) && !searchButton.contains(e.target) && window.innerWidth > 768) {
      searchInputDesktop.classList.add('hidden');
    }
  });

  // Ajustar el estado del buscador al cambiar el tamaño de la ventana
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // Pantallas grandes: cerrar el mobile-search-menu y mostrar el input de escritorio si estaba abierto
      mobileSearchMenu.classList.remove('show');
      // Opcional: restaurar el input de escritorio al estado inicial (cerrado por defecto)
      searchInputDesktop.classList.add('hidden');
    } else {
      // Móviles: ocultar el input de escritorio
      searchInputDesktop.classList.add('hidden');
    }
  });
});