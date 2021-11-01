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

function addBookToLibrary(book) {
    myLibrary.push(book);

}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const sevenHabits = new Book("The 7 Habits of Highly Effective People", "Stephen Covey", 381, false);
const nineteenEightFour = new Book("1984", "George Orwell", 328, true);
addBookToLibrary(theHobbit);
addBookToLibrary(sevenHabits);
addBookToLibrary(nineteenEightFour);

console.table(myLibrary);

const newBook = document.querySelector('#new');
newBook.addEventListener('click', () => {
    let title = prompt('Book Title: ', 'insert title');
    let author = prompt('Book Author: ', 'insert author');
    let pages = prompt('Book Pages: ', 999);
    pages = parseInt(pages);
    let read = confirm('Have you read it?');

    const newBook = new Book (title, author, pages, read);
    addBookToLibrary(newBook);
    console.table(myLibrary);
});