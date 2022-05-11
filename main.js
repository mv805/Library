let myLibrary = [];

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

function addBookToLibrary() {

}

const book1 = new Book("Big Baby Book", "J.K. Rowlings", 450, true);

const book2 = new Book("BAMA", "Chris Tucker", 45, false);