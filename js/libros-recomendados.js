// Array de objetos que representan cada libro
const books = [
  {
    title: "El Nombre del Viento",
    author: "Patrick Rothfuss",
    cover: "img/libro1.jpg",
    description: "Una historia épica sobre Kvothe, un hombre de muchas habilidades y secretos, que narra su vida llena de magia, música y misterio.",
    editor: "DAW Books",
    releaseDate: "2007",
    pages: 662,
    isbn: "978-0756404079",
    review: `"Una obra maestra de la fantasía moderna que te atrapará desde la primera página." – The New York Times`
  },
  {
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    cover: "img/libro2.jpg",
    description: "La historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.",
    editor: "Editorial Sudamericana",
    releaseDate: "1967",
    pages: 471,
    isbn: "978-8437604947",
    review: `"Una de las obras más importantes de la literatura universal." – The Guardian`
  },
  {
    title: "1984",
    author: "George Orwell",
    cover: "img/libro3.jpg",
    description: "Una distopía que explora temas de vigilancia, control y manipulación en un futuro totalitario.",
    editor: "Secker & Warburg",
    releaseDate: "1949",
    pages: 328,
    isbn: "978-0451524935",
    review: `"Una advertencia atemporal sobre los peligros del autoritarismo." – The New Yorker`
  },
  {
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    cover: "img/libro4.jpg",
    description: "La épica aventura de Frodo Bolsón y sus amigos para destruir el Anillo Único y salvar la Tierra Media.",
    editor: "Allen & Unwin",
    releaseDate: "1954",
    pages: 1178,
    isbn: "978-0618640157",
    review: `"Una obra maestra de la fantasía que ha definido el género." – The Times`
  }
];

// Referencias a los elementos del DOM
const mainCover = document.getElementById('main-book-cover');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookDescription = document.getElementById('book-description');
const bookDetails = document.querySelector('.book-details');
const review = document.querySelector('.book-review p');
const thumbnails = document.querySelectorAll('.thumbnail');

// Verificación de carga
console.log("Script loaded, thumbnails found:", thumbnails.length);

// Función para actualizar la información del libro
function updateBookInfo(book, index) {
  mainCover.src = book.cover;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookDescription.textContent = book.description;
  bookDetails.innerHTML = `
    <p><strong>Editor:</strong> ${book.editor}</p>
    <p><strong>Fecha de lanzamiento:</strong> ${book.releaseDate}</p>
    <p><strong>Páginas:</strong> ${book.pages}</p>
    <p><strong>ISBN:</strong> ${book.isbn}</p>
  `;
  review.textContent = book.review;
  thumbnails.forEach(t => t.classList.remove('active'));
  thumbnails[index].classList.add('active');
}

// Añadir evento de clic a las miniaturas
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => updateBookInfo(books[index], index));
});

// Mostrar el primer libro al cargar la página
window.addEventListener('load', () => updateBookInfo(books[0], 0));