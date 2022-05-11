const book1 = new Book("Big Baby Book", "J.K. Rowlings", 450, true);

let myLibrary = [];

let bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', addBookToLibrary);
function Book(title, author, numOfPages, isRead) {

    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.isRead = isRead

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
    myLibrary.push(new Book(bookFormValues['book-title'].value, bookFormValues['book-author'].value, +bookFormValues['number-of-pages'].value, bookFormValues['book-read-status'].checked));
    bookForm.reset();

}