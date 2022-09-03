let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
    const library = document.querySelector(".library");
    library.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const deleteButton = document.createElement("img");
        deleteButton.classList.add("deleteButton");
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
        card.appendChild(read);

        library.appendChild(card);
    });
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
    addBookToLibrary(title, author, pages, read);
    overlay.style.display = "none";
    displayBooks();
    form.reset();
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