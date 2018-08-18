class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
//Create TR Element
    const row = document.createElement('tr');
//Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
  }

  showAlert(message, className) {
//Create div
const div = document.createElement('div');
  //add classes
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.container');
  //Get Form
  const form = document.querySelector('#book-form');
  //Insert Alert
  container.insertBefore(div, form);

//Timeout (remove alert)
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//Local Storage
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;

      //Add Book to Ui
      ui.addBookToList(book);
    });
  }

  static addBooks(book) {
    const books = Store.getBooks();
      books.push(book);

      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
//Remove from LS
      const books = Store.getBooks();

      books.forEach(function(book, index){
        const ui = new UI;
          if(book.isbn === isbn) {
            books.splice(index, 1)
          }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listners for Adding a book
document.getElementById('book-form').addEventListener('submit', function(e){
//get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

//Instantiate the book
  const book = new Book(title, author, isbn);

//Instantiate UI
  const ui = new UI();

//validate
  if(title === '' || author === '' || isbn === '') {
//Error Alert
    ui.showAlert('Please fill in all the fields', 'error');
  } else {
//Add Book to list
    ui.addBookToList(book);
//Add to local storage
    Store.addBooks(book);
//Show success
    ui.showAlert('book added!', 'success');
//Clear fields
    ui.clearFields();
  }
    e.preventDefault();
});

//Event Listeners for deleting a book
document.getElementById('book-list').addEventListener('click', function(e) {
//Instantiate UI
  const ui = new UI();
//Delete book
  ui.deleteBook(e.target);

//Remove from ls
Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

//Show Message
  ui.showAlert('Book removed!', 'success');
  
  e.preventDefault();
});