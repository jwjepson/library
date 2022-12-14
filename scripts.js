let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
    const library = document.querySelector(".library");
    const emptyLibrary = document.querySelector(".empty");
    library.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;

        const deleteButton = document.createElement("img");
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", deleteBook);
        deleteButton.src = "icons/close-button.svg";
        card.appendChild(deleteButton);

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("div");
        author.classList.add("author");
        author.textContent = `By ${book.author}`;
        card.appendChild(author);

        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.textContent = `${book.pages} pages`;
        card.appendChild(pages);

        const read = document.createElement("button");
        read.classList.add("readButton");
        read.textContent = book.read;
        read.addEventListener("click", isRead);
        card.appendChild(read);

        library.appendChild(card);
    });
    if (myLibrary.length > 0) {
        emptyLibrary.style.display = "none";
    }
    else {
        emptyLibrary.style.display = "flex";
    }
};

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read-it").checked;
    if (read == true) {
        read = "read";
    }
    else {
        read = "not read";
    }
    if (validateInput(title, author, pages) == true) {
        addBookToLibrary(title, author, pages, read);
        overlay.style.display = "none";
        displayBooks();
        form.reset();
    }
});

newBookButton = document.querySelector("#newBookButton");
overlay = document.querySelector(".overlay");
closeButton = document.querySelector(".close-button");
form = document.querySelector("form");

newBookButton.addEventListener("click", () => {
    overlay.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    form.reset();
});

function deleteBook() {
    myLibrary.splice(this.parentElement.getAttribute("data-index"), 1);
    displayBooks();
}

function isRead() {
    let bookIndex = this.parentElement.getAttribute("data-index");
    if (myLibrary[bookIndex].read == "not read") {
        myLibrary[bookIndex].read = "read";
        this.textContent = "read";
    }
    else {
        myLibrary[bookIndex].read = "not read";
        this.textContent = "not read";
    }
}

function validateInput(title, author, pages) {
    if (!title || !author || !pages) {
        return false;
    }
    return true;
}