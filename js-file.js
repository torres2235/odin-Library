let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const newButton = document.getElementById('new');

function addBookToLibrary(book) {
    myLibrary.push(book);

}

function addBookCard(book) {
    let newBook = document.createElement("div"); //create new div
    newBook.classList.toggle('books');

    //sets our title for the display
    let newTitle = document.createElement("div");
    let title = document.createTextNode(book.title);
    newTitle.append(title);
    newBook.appendChild(newTitle);

    //sets our author for the display
    let newAuthor = document.createElement("div");
    let author = document.createTextNode(book.author);
    newAuthor.append(author);
    newBook.appendChild(newAuthor);

    //sets our pages for our display
    let newPages = document.createElement("div");
    let pages = document.createTextNode(book.pages);
    newPages.append(pages);
    newBook.appendChild(newPages);

    //sets if we read the book for our display
    let newRead = document.createElement("div");
    let read;
    if(book.read === true) {
        read = document.createTextNode('Read');
    } else {
        read = document.createTextNode('Not Read');
    }
    newRead.append(read);
    newBook.appendChild(newRead);

    //adds the delete button
    let deleteButton = document.createElement("button");
    let content = document.createTextNode("Delete");
    deleteButton.append(content);
    newBook.appendChild(deleteButton);
    
    //inserts our new book card before our add button
    document.querySelector('.container').insertBefore(newBook, newButton);
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
function onLoad() {
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
}
//----------------------------------