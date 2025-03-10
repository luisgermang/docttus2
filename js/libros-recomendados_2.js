// Array de objetos que representan cada libro
const books = [
  {
    title: "El PODER DE LA PROSPERIDAD",
    author: "Luis German Gil",
    cover: "img/libro1.jpg", // Ajusta la ruta de la imagen
    description: "una guía esencial para transformar tu relación con el dinero y alcanzar una vida de abundancia. Este libro ofrece un enfoque práctico y profundo sobre cómo los principios financieros correctos pueden cambiar no solo tus finanzas, sino también tu mentalidad y estilo de vida.",
    editor: "Street Capital",
    releaseDate: "2024",
    pages: 534,
    isbn: "978-1612191294",
    review: `“Lo terminé de leer en una semana excelente libro. 
             ” – Christopher Reath`
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cover: "img/libro2.jpg", // Ajusta la ruta de la imagen
    description: "El primer libro de la saga de Harry Potter...",
    editor: "Bloomsbury",
    releaseDate: "1997",
    pages: 223,
    isbn: "978-0747532699",
    review: `"Un clásico de la fantasía moderna para jóvenes y adultos."`
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    cover: "img/libro3.jpg", // Ajusta la ruta de la imagen
    description: "Segunda entrega de la famosa saga de Harry Potter...",
    editor: "Bloomsbury",
    releaseDate: "1998",
    pages: 251,
    isbn: "978-0747538493",
    review: `"La historia continúa con más magia y misterio."`
  },
  // Agrega más libros según desees
];

// Referencias a los elementos del DOM
const mainCover = document.getElementById('main-book-cover');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookDescription = document.getElementById('book-description');
const bookInfoContainer = document.querySelector('.book-info');
const reviewContainer = document.querySelector('.review p');

// Función para actualizar la información del libro
function updateBookInfo(book) {
  mainCover.src = book.cover;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookDescription.textContent = book.description;
  bookInfoContainer.innerHTML = `
    <p><strong>Editor:</strong> ${book.editor}</p>
    <p><strong>Fecha de lanzamiento:</strong> ${book.releaseDate}</p>
    <p><strong>Páginas:</strong> ${book.pages}</p>
    <p><strong>ISBN:</strong> ${book.isbn}</p>
  `;
  reviewContainer.textContent = book.review;
}

// Seleccionamos todas las miniaturas y les añadimos un evento de clic
document.querySelectorAll('.book-thumbnail').forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    const selectedBook = books[index];
    updateBookInfo(selectedBook);
  });
});

// Mostrar el primer libro al cargar la página
window.addEventListener('load', () => {
  updateBookInfo(books[0]);
});