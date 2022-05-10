function Book(title, author, numOfPages, isRead) {

    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.isRead = isRead
    this.infoText = `${this.title} by ${this.author}, ${this.numOfPages} pages`

    if (this.isRead) {
        this.readStatus = `, has been read.`
    } else {
        this.readStatus = `, has not been read yet.`
    }

    this.info = function () {
        return this.infoText + this.readStatus;
    }

}

const book1 = new Book("Big Baby Book", "J.K. Rowlings", 450, true);

const book2 = new Book("BAMA", "Chris Tucker", 45, false);