const myLibrary = [];

function Book(title, author, year, read) {
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
  card.setAttribute('id', string);
  card.innerHTML = `<pre>${string}</pre>`;
  document.getElementById(elementName).appendChild(card);
  // creates card with book info

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'button-card-div';
  document.getElementById(string).appendChild(buttonDiv);

  const editButton = document.createElement('button');
  editButton.className = 'edit-button';
  const editImg = document.createElement('img');
  editImg.src = './Images/edit.svg';
  editImg.style.height = '15px';
  editButton.appendChild(editImg);
  buttonDiv.appendChild(editButton);
  // creates edit button

  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  // TODO create event listener for removing card
  const removeImg = document.createElement('img');
  removeImg.src = './Images/remove.svg';
  removeImg.style.height = '15px';
  removeButton.appendChild(removeImg);
  buttonDiv.appendChild(removeButton);
  // creates remove button
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
  removeCardSetup();
}

function addNewCard() {
  const showcase = document.getElementById('showcase');
  while (showcase.firstChild) {
    showcase.removeChild(showcase.firstChild);
  }

  const form = document.getElementById('add-form');
  const title = form.title.value;
  const author = form.author.value;
  const year = form.year.value;

  const newBook = new Book(
      title,
      author,
      year,
  );
  addBookToLibrary(newBook, myLibrary);
  displayBooks(myLibrary);

  form.remove();
  const button = document.getElementById('add-books');
  const addBookBtn = document.createElement('button');
  addBookBtn.setAttribute('type', 'button');
  addBookBtn.setAttribute('onclick', 'showForm()');
  addBookBtn.setAttribute('id', 'add-button');
  button.append(addBookBtn);
  addBookBtn.innerHTML = 'Add Book';
}
// TODO quebrado
function removeCardSetup() {
  const removeButtonElements = document.getElementsByClassName('remove-button');
  console.log(removeButtonElements);
  for (let i = 0; i < removeButtonElements.length; i++) {
    removeButtonElements[i].addEventListener('click', function(event) {
      event.target.closest('button').parentNode.parentNode.remove();
    });
  }
}

function handleForm(event) {
  event.preventDefault();
}

function showForm() {
  const addButton = document.getElementById('add-button');
  addButton.remove();

  const form = document.createElement('form');
  form.setAttribute('id', 'add-form');
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.addEventListener('submit', handleForm);

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('name', 'title');
  title.setAttribute('placeholder', 'Book title');
  title.setAttribute('required', true);
  form.append(title);

  const author = document.createElement('input');
  author.setAttribute('type', 'text');
  author.setAttribute('name', 'author');
  author.setAttribute('placeholder', 'Author');
  author.setAttribute('required', true);
  form.append(author);

  const year = document.createElement('input');
  year.setAttribute('type', 'number');
  year.setAttribute('name', 'year');
  year.setAttribute('placeholder', 'Year of publication');
  form.setAttribute('required', true);
  form.append(year);

  const addBookButton = document.createElement('input');
  addBookButton.setAttribute('type', 'submit');
  form.appendChild(addBookButton);

  const div = document.getElementById('form-section');
  div.appendChild(form);
}

document.addEventListener('submit', addNewCard);

const lotr = new Book(
    'The Fellowship of the Ring',
    'J.R.R. Tolkien',
    1921,
);
const babel = new Book(
    'Babel',
    'R.F. Kuang',
    2022,
);
const psalmFTW = new Book(
    'A Psalm for the Wild',
    'Becky Chambers',
    2021,
);

addBookToLibrary(lotr, myLibrary);
addBookToLibrary(babel, myLibrary);
addBookToLibrary(psalmFTW, myLibrary);

displayBooks(myLibrary);


