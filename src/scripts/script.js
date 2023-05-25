let myLibrary = [];

function Book(title, author, pages, read,type) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.type = type;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const addBtn = document.getElementById('addBtn');
const addDialog = document.getElementById('addDialog');
const cancel = document.querySelector("#cancel");

addBtn.addEventListener('click', () => {
    addDialog.classList.remove("hide");
    addDialog.showModal();
});

//close dialog on click outside
addDialog.addEventListener('click', (e) => {
    if(e.target === addDialog) {
      addDialog.classList.add("hide");
      setTimeout(() => {
          addDialog.close();
      },105);
    }
});

cancel.addEventListener("click", () => {
    addDialog.classList.add("hide");
    setTimeout(() => {
        addDialog.close();
    },105);
});

const pages = document.getElementById("pages");
    const type = document.getElementsByName("radio");
    const mark = document.getElementById("mark");

    function changePages() {
        if (type[1].checked) {
            pages.placeholder = "Minutes";
            mark.innerHTML = "Mark as listened";

        } else {
            pages.placeholder = "Pages";
            mark.innerHTML = "Mark as read";

        }
    }

    type[0].addEventListener("click", changePages);
    type[1].addEventListener("click", changePages);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const radio = document.getElementsByName('radio');
    let type = "";
    if(radio[0].checked) {
        type = "Book";
    } else if(radio[1].checked) {
        type = "AudioBook";
    }
    const book = new Book(title, author, pages, read, type);
    addBookToLibrary(book);
    addDialog.classList.add("hide");
    setTimeout(() => {
        addDialog.close();
    },105);
    form.reset();
    render();
});

function render() {
    myLibrary.forEach((book, index) => {
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            render();
        });
    });
}