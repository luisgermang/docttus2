document.addEventListener('DOMContentLoaded', function() {
  const searchContainer = document.querySelector('.search-container');
  const inputField = searchContainer.querySelector('input[type="text"]');

  // Solo aplica en móviles
  if (window.innerWidth <= 768) {
    searchContainer.addEventListener('click', function(e) {
      // Si no está activo, lo activamos y enfocamos el input
      if (!searchContainer.classList.contains('active')) {
        searchContainer.classList.add('active');
        inputField.focus();
        e.stopPropagation();
      }
    });

    // Al hacer clic fuera, colapsamos el buscador
    document.addEventListener('click', function(e) {
      if (searchContainer.classList.contains('active') && !searchContainer.contains(e.target)) {
        searchContainer.classList.remove('active');
      }
    });
  }
});
