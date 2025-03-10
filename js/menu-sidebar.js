document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.sidebar');
  const sidebarClose = document.getElementById('sidebar-close');

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
  });
});