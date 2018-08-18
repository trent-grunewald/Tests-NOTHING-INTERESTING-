//Book Constructor - Creates the book
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //Create tr element
  const row = document.createElement('tr');
  //Insert columns
  //Only able to get book values because book is the prototype method above (book)
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function(message, className) {
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

  //Timeout
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}

//Delete book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

//Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit', function(e) {
  //Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

        //Instantiate book
  const book = new Book(title, author, isbn);

  const ui = new UI();

  //Validate
  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);

    ui.showAlert('Book Added!', 'success');

    ui.clearFields();
  }

  e.preventDefault()
});


//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  //Delete book
  ui.deleteBook(e.target);

  //Show Alert
  ui.showAlert('Book removed', 'success');

  e.preventDefault();
})