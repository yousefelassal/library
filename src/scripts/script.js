let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());
console.log(Object.getPrototypeOf(theHobbit)===Book.prototype);

function addBookToLibrary(book) {
    myLibrary.push(book);
}