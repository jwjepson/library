let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read-it")
    console.log(title, author, pages, read);
    addBookToLibrary(title, author, pages, read);
});

function resetForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read = false;

}

newBookButton = document.querySelector("#newBookButton");
overlay = document.querySelector(".overlay");
closeButton = document.querySelector(".close-button");

newBookButton.addEventListener("click", () => {
    overlay.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    resetForm();
});