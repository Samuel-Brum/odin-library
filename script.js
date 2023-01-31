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

function addCard(string, elementName) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<pre>${string}</pre>`;
  document.getElementById(elementName).appendChild(card);
}

function displayBooks(library) {
  for (book in library) {
    if (Object.prototype.hasOwnProperty.call(library, book)) {
      const bookInfo = 'Book: ' + library[book].title + '\n' +
      'Author: ' + library[book].author + '\n' +
      'Year of Publication: ' + library[book].year;

      addCard(bookInfo, 'showcase');
    }
  }
}

const lotr = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1921);
const babel = new Book('Babel', 'R.F. Kuang', 2022);
const psalmFTW = new Book('A Psalm for the Wild', 'Becky Chambers', 2021);

addBookToLibrary(lotr, myLibrary);
addBookToLibrary(babel, myLibrary);
addBookToLibrary(psalmFTW, myLibrary);

displayBooks(myLibrary);
