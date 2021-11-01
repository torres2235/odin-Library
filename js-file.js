let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    /*
    this.info = function() {
        return(title + " by " + author + ", " + pages + " pages, " + read);
    }
    */
}

const newButton = document.getElementById('new');

function addBookToLibrary(book) {
    myLibrary.push(book);

    let newBook = document.createElement("div"); //create new div
    newBook.classList.toggle('books');
    //let newContent = document.createTextNode("[" + book.title + ", by " + book.author + ", " + book.pages + " pages, " + book.read + "]");
    let title = document.createTextNode(book.title);
    newBook.appendChild(title); //insert text into our new div

    let author = document.createTextNode(book.author);
    newBook.appendChild(author);

    let pages = document.createTextNode(book.pages);
    newBook.appendChild(pages);

    let read;
    if(book.read === true) {
        read = document.createTextNode('Read');
    } else {
        read = document.createTextNode('Not Read');
    }
    newBook.appendChild(read);

    
    document.querySelector('.container').insertBefore(newBook, newButton); //put our new div into our 'books' div
    

}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const sevenHabits = new Book("The 7 Habits of Highly Effective People", "Stephen Covey", 381, false);
const nineteenEightFour = new Book("1984", "George Orwell", 328, true);
addBookToLibrary(theHobbit);
addBookToLibrary(sevenHabits);
addBookToLibrary(nineteenEightFour);

console.table(myLibrary);

newButton.addEventListener('click', () => {
    let title = prompt('Book Title: ', 'insert title');
    let author = prompt('Book Author: ', 'insert author');
    let pages = prompt('Book Pages: ', 999);
    pages = parseInt(pages);
    let read = confirm('Have you read it?');

    const newBook = new Book (title, author, pages, read);
    addBookToLibrary(newBook);
    console.table(myLibrary);
});