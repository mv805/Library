let bookIdCounter = 0;
const maxBookCount = 10;
let myLibrary = [];

let bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', addBookToLibrary);

const bookArea = document.querySelector('.books-area');

class Book {

    constructor(title, author, numOfPages, isRead) {
        this.title = title
        this.author = author
        this.numOfPages = numOfPages
        this.isRead = isRead
        this.bookId = undefined
    }

    setBookID(idNumber) {
        if (this.bookId === undefined) {
            this.bookId = ('book-' + idNumber);
        };
    }

    getReadStatus() {
        if (this.isRead) {
            return ', has been read.';
        } else {
            return ', has not been read yet.';
        }
    }

    info() {

        return `${this.title} by ${this.author}, ${this.numOfPages} pages` + this.getReadStatus();
    }
}

function addBookToLibrary(e) {

    e.preventDefault();

    if (myLibrary.length === maxBookCount) {
        alert('Book shelf full');
        return;
    }

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

    let bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('book-written-title');
    bookTitle.textContent = `${book.title}`;

    let bookSpacer = document.createElement('div');
    bookSpacer.textContent = '\u00A0by\u00A0';
    bookSpacer.style.fontWeight = '100';

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('book-written-author');
    bookAuthor.textContent = `${book.author}`;

    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookSpacer);
    bookDetails.appendChild(bookAuthor);

    bookElement.appendChild(bookDetails);

    let bookNumberOfPages = document.createElement('div');
    bookNumberOfPages.classList.add('book-written-number-of-pages');
    bookNumberOfPages.textContent = `${book.numOfPages} Pages`;
    bookElement.appendChild(bookNumberOfPages);

    let bookReadStatus = document.createElement('div');
    bookReadStatus.classList.add('book-written-read-status');
    if (book.isRead) {
        bookReadStatus.textContent = 'Has been read';
        bookReadStatus.classList.add('book-is-read');
    } else {
        bookReadStatus.textContent = 'Has not been read';
        bookReadStatus.classList.add('book-is-not-read');
    }
    bookReadStatus.addEventListener('click', changeReadStatus);

    let bookRemoveButton = document.createElement('button');
    bookRemoveButton.classList.add('material-icons');
    bookRemoveButton.textContent = 'cancel';
    bookRemoveButton.classList.add('book-remove-button');
    bookRemoveButton.addEventListener('click', removeBook);

    let readStatusAndRemoveButtonContainer = document.createElement('div');
    readStatusAndRemoveButtonContainer.appendChild(bookRemoveButton);
    readStatusAndRemoveButtonContainer.appendChild(bookReadStatus);
    readStatusAndRemoveButtonContainer.classList.add('status-and-remove-container');
    bookElement.appendChild(readStatusAndRemoveButtonContainer);

    bookElement.classList.add('book');
    bookElement.setAttribute('id', book.bookId);

    bookArea.appendChild(bookElement);
}

function removeBook(e) {
    let bookIdContainer = e.target.parentNode.parentNode.id;
    let bookToRemove = document.querySelector(`#${bookIdContainer}`);
    bookArea.removeChild(bookToRemove);
    myLibrary.forEach((book, index) => {
        if (book.bookId === bookIdContainer) {
            myLibrary.splice(index, 1);
        }
    });
}

function changeReadStatus(e) {
    console.log('changing read status...');
    let bookClickedId = e.target.parentNode.parentNode.id;

    myLibrary.forEach((book) => {

        if (book.bookId === bookClickedId) {
            if (book.isRead) {
                book.isRead = false;
                e.target.textContent = 'Has not been read';
                e.target.classList.remove('book-is-read');
                e.target.classList.add('book-is-not-read');
            } else {
                book.isRead = true;
                e.target.textContent = 'Has been read';
                e.target.classList.add('book-is-read');
                e.target.classList.remove('book-is-not-read');
            }
        } else {
            return;
        }

    });
}