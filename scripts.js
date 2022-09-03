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
        library.appendChild(card);
    });
};

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read-it").checked;
    addBookToLibrary(title, author, pages, read);
    overlay.style.display = "none";
    displayBooks();
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