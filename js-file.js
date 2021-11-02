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
let deleteId = 0;

function addBookToLibrary(book) {
    myLibrary.push(book);

    let newBook = document.createElement("div"); //create new div
    newBook.classList.toggle('books');

    let newTitle = document.createElement("div");
    let title = document.createTextNode(book.title);
    newTitle.append(title);
    newBook.appendChild(newTitle);

    let newAuthor = document.createElement("div");
    let author = document.createTextNode(book.author);
    newAuthor.append(author);
    newBook.appendChild(newAuthor);

    let newPages = document.createElement("div");
    let pages = document.createTextNode(book.pages);
    newPages.append(pages);
    newBook.appendChild(newPages);

    let newRead = document.createElement("div");
    let read;
    if(book.read === true) {
        read = document.createTextNode('Read');
    } else {
        read = document.createTextNode('Not Read');
    }
    newRead.append(read);
    newBook.appendChild(newRead);

    let deleteButton = document.createElement("button");
    deleteButton.classList.toggle('delete');
    deleteButton.id = deleteId;
    let content = document.createTextNode("Delete");
    deleteButton.append(content);
    newBook.appendChild(deleteButton);
    deleteId++;
    
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


const deleteButton = document.querySelector('button');
deleteButton.addEventListener('click', () => {
    alert(deleteButton.id);
})