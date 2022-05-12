let bookIdCounter = 0;
let myLibrary = [];

let bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', addBookToLibrary);

const bookArea = document.querySelector('.books-area');
function Book(title, author, numOfPages, isRead) {

    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.isRead = isRead
    this.bookId = undefined
}

Book.prototype.setBookID = function (idNumber) {

    if (this.bookId === undefined) {
        this.bookId = ('book-' + idNumber);
    };

}

Book.prototype.getReadStatus = function () {

    if (this.isRead) {
        return ', has been read.';
    } else {
        return ', has not been read yet.';
    }

}

Book.prototype.info = function () {

    return `${this.title} by ${this.author}, ${this.numOfPages} pages` + this.getReadStatus();
}

function addBookToLibrary(e) {

    e.preventDefault();
    let bookFormValues = document.querySelector('#book-form').elements;
    let bookToAdd = new Book(bookFormValues['book-title'].value, bookFormValues['book-author'].value, +bookFormValues['number-of-pages'].value, bookFormValues['book-read-status'].checked);
    bookToAdd.setBookID(bookIdCounter);
    bookIdCounter++;
    myLibrary.push(bookToAdd);
    bookForm.reset();
    addBookToShelf(bookToAdd);

}

function addBookToShelf(book) {

    let bookElement = document.createElement('div');

    let bookElementDetails = document.createElement('div');
    bookElementDetails.classList.add('book-details');
    let bookElementTitle = document.createElement('div');
    bookElementTitle.classList.add('book-written-title');
    bookElementTitle.textContent = `${book.title}`;
    let bookElementSpacer = document.createElement('div');
    bookElementSpacer.textContent = '\u00A0by\u00A0';
    bookElementSpacer.style.fontWeight = '100';
    let bookElementAuthor = document.createElement('div');
    bookElementAuthor.classList.add('book-written-author');
    bookElementAuthor.textContent = `${book.author}`;
    bookElementDetails.appendChild(bookElementTitle);
    bookElementDetails.appendChild(bookElementSpacer);
    bookElementDetails.appendChild(bookElementAuthor);
    bookElement.appendChild(bookElementDetails);

    let bookElementNumberOfPages = document.createElement('div');
    bookElementNumberOfPages.classList.add('book-written-number-of-pages');
    bookElementNumberOfPages.textContent = `${book.numOfPages} Pages`;
    bookElement.appendChild(bookElementNumberOfPages);

    let bookElementReadStatus = document.createElement('div');
    bookElementReadStatus.classList.add('book-written-read-status');
    if (book.isRead) {
        bookElementReadStatus.textContent = 'Has been read';
        bookElementReadStatus.classList.add('book-is-read');
    } else {
        bookElementReadStatus.textContent = 'Has not been read';
        bookElementReadStatus.classList.add('book-is-not-read');
    }

    bookElement.appendChild(bookElementReadStatus);

    bookElement.classList.add('book');
    bookElement.setAttribute('id', book.bookId);
    bookArea.appendChild(bookElement);
}

/*let book1 = new Book("Grapes of Wrath", "Ernest Hemingway", 500, false);
book1.setBookID();*/