let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + " by " + this.author + ', ' + this.pages + ' pages, ' + this.read
    }
}



function addBookToLibrary(book) {
    myLibrary.push(book)
}

// display book on page
// alternatively can use .forEach() ??
for (i = 0; i < myLibrary.length; i++) {
}


// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'read')
