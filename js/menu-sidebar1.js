


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.sidebar');
  
  if (!hamburger) {
    console.error("No se encontró el elemento con id 'hamburger'");
    return;
  }
  if (!sidebar) {
    console.error("No se encontró el elemento con clase 'sidebar'");
    return;
  }
  
  hamburger.addEventListener('click', function (e) {
    // Quita stopPropagation para ver si eso afecta
    sidebar.classList.toggle('active');
    let expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', (!expanded).toString());
    console.log("Sidebar active:", sidebar.classList.contains('active'));
  });
});
