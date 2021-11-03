let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const newButton = document.getElementById('new');
let container = document.getElementById('container');

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addBookCard(book) {
    let newBook = document.createElement("div"); //create new div
    newBook.classList.toggle('books');

    //sets our title for the display
    let newTitle = document.createElement("div");
    newTitle.textContent = `"${book.title}"`;
    newBook.appendChild(newTitle);

    //sets our author for the display
    let newAuthor = document.createElement("div");
    newAuthor.textContent = book.author;
    newBook.appendChild(newAuthor);

    //sets our pages for our display
    let newPages = document.createElement("div");
    newPages.textContent = book.pages;
    newBook.appendChild(newPages);

    /*
    //sets if we read the book for our display
    let newRead = document.createElement("div");
    if(book.read === true) {
        newRead.textContent = 'Read'
    } else {
        newRead.textContent = 'Not Read'
    }
    newBook.appendChild(newRead);
    */

    //adds the read toggle button
    let readButton = document.createElement("button");
    if(book.read === true) {
        readButton.textContent = 'Read'
    } else {
        readButton.textContent = 'Not Read'
    }
    newBook.appendChild(readButton);

    //adds the delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    newBook.appendChild(deleteButton);

    //container.appendChild(newBook);
    
    //inserts our new book card before our add button
    document.querySelector('#container').insertBefore(newBook, newButton);

    //delete our bookCard if we hit the delete button
    deleteButton.onclick = function() {
        container.removeChild(newBook);
        myLibrary.splice(myLibrary.indexOf(book), 1); //gets the index of the book in myLibrary and deletes it
    }

    readButton.onclick = function() {
        book.read = !book.read;
        if(book.read === true) {
            readButton.textContent = 'Read'
        } else {
            readButton.textContent = 'Not Read'
        }
    }
}

function removeBookCard(book) {
    this.books = this.books.filter((book) => book.title !== title)
}

newButton.addEventListener('click', () => { //button to add books to myLibrary and display
    let title = prompt('Book Title: ', 'insert title');
    let author = prompt('Book Author: ', 'insert author');
    let pages = prompt('Book Pages: ', 999);
    pages = parseInt(pages);
    let read = confirm('Have you read it?');
    const newBook = new Book (title, author, pages, read);
    addBookToLibrary(newBook);
    addBookCard(newBook);
    console.table(myLibrary);
});

//default books added into myLibrary
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const sevenHabits = new Book("The 7 Habits of Highly Effective People", "Stephen Covey", 381, false);
const nineteenEightFour = new Book("1984", "George Orwell", 328, true);
addBookToLibrary(theHobbit);
addBookCard(theHobbit);
addBookToLibrary(sevenHabits);
addBookCard(sevenHabits);
addBookToLibrary(nineteenEightFour);
addBookCard(nineteenEightFour);

console.table(myLibrary);
//----------------------------------