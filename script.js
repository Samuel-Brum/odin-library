console.log('estou funcionando');

const myLibrary = [];

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(newBook, library) {
  library.push(newBook);
}

function displayBooks(library) {
  for (book in library) {
    if (Object.prototype.hasOwnProperty.call(library, book)) {
      const string = 'Livro: ' + library[book].title + '\n' +
      'Autor: ' + library[book].author + '\n' +
      'Ano de publicação: ' + library[book].year;

      string.replace(/\t/g, ''); // removes indentation

      console.log(string);
    }
  }
}

const lotr = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1921);
const babel = new Book('Babel', 'R.F. Kuang', 2022);

addBookToLibrary(lotr, myLibrary);
addBookToLibrary(babel, myLibrary);

displayBooks(myLibrary);
