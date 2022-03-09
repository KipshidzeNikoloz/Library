//Query Selectors + Event Listeners 

const addBtn = document.querySelector('.addNew');
const submit = document.querySelector('.submit');
const cancel = document.querySelector('.cancel');
const read = document.querySelector('#read');
const remove = document.querySelector('.remove')
const readConfirm = document.querySelector('.readConfirm');
const fillCard = document.querySelector('.fillCard');
const popUp = document.querySelector('.popUp')


addBtn.addEventListener('click', () => popUp.style.display = 'flex');
cancel.addEventListener('click', () => popUp.style.display = 'none')


// Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// Create Library empty Array
let myLibrary = []
let addBook;

//Take value of elements and return an object
const addBookToLibrary = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    return new Book(title, author, pages, read)
}

// Add objects to the array and render books on the page

const update = (e) => {
    e.preventDefault()
    popUp.style.display = 'none';

    const newBook = addBookToLibrary()
    myLibrary.push(newBook);
    resetBooks();
}


const resetBooks = () => {
    const display = document.querySelector('.libraryContainer');
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => display.removeChild(card));
    
    for (let i=0; i<myLibrary.length; i++){
        addCard(myLibrary[i]);
    }
}

// DOM Elements 

const addCard = (book) => {
    const libraryDiv = document.querySelector('.libraryContainer')
    const cardDiv = document.createElement('div');
    const bookCardInfoDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const bookCardOperationsDiv = document.createElement('div');
    const readConfirmBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    cardDiv.classList.add('card');
    bookCardInfoDiv.classList.add('bookCardInfo');
    titleDiv.classList.add('title');
    authorDiv.classList.add('author');
    pagesDiv.classList.add('pages');
    bookCardOperationsDiv.classList.add('bookCardOperations');
    readConfirmBtn.classList.add('readConfirm');
    removeBtn.classList.add('remove');
    
    if(book.read===false) {
        readConfirmBtn.classList.add('notRead');
    }

    readConfirmBtn.addEventListener('click', () => {
        book.read = !book.read;
        resetBooks();
    })

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        resetBooks();
    })

    titleDiv.textContent = `${book.title}`
    authorDiv.textContent = book.author
    pagesDiv.textContent = `${book.pages} pages`
    removeBtn.innerHTML = '<span class="iconify" data-icon="iconoir:cancel"></span>'
    readConfirmBtn.innerHTML = '<span class="iconify" data-icon="ant-design:read-outlined">'

    cardDiv.appendChild(bookCardInfoDiv);
    bookCardInfoDiv.appendChild(titleDiv);
    bookCardInfoDiv.appendChild(authorDiv);
    bookCardInfoDiv.appendChild(pagesDiv);
    cardDiv.appendChild(bookCardOperationsDiv)
    bookCardOperationsDiv.appendChild(readConfirmBtn)
    bookCardOperationsDiv.appendChild(removeBtn)
    libraryDiv.appendChild(cardDiv);
}

submit.addEventListener('click', update)


