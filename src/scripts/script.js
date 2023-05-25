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

const yourBooks = document.querySelector("#yourBooks");
function render() {
    yourBooks.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `<div class="container">
        <div class="book">
          <div class="front">
            <div class="cover">
                        <svg 
                           id="eye-left"
                           xmlns="http://www.w3.org/2000/svg"
                           width="75" 
                           height="100" 
                           version="1.0">
                           <path d="m 72.520861,60.915859 v 0 C 69.385207,53.011396 61.908243,46.570093 55.74346,42.387465 49.578631,38.204905 40.408101,36.818968 33.679899,37.051071 c -1.597953,0.05517 -2.931531,0.451253 -4.000736,1.188245 -0.738155,0.570053 -1.097854,1.127016 -1.079089,1.670881 0.02949,0.854739 0.93486,2.69053 2.716108,5.507379 0.805175,1.372521 1.234574,2.83577 1.288193,4.389751 0.131362,3.807345 -0.983571,6.879734 -3.344801,9.217182 -2.361227,2.337476 -5.686459,3.580206 -9.975699,3.728183 C 15.162859,62.894893 11.580282,61.559887 8.5361375,58.747669 5.4920363,55.935482 3.8975877,52.431474 3.7527937,48.235627 c -0.1769131,-5.1282 2.0835359,-9.776522 6.7813483,-13.944986 4.697855,-4.168379 11.041643,-6.390426 19.031387,-6.666142 8.662566,-0.298838 16.811229,2.201105 24.446015,7.499833 7.634738,5.298806 13.804506,13.895976 18.509317,25.791527 z" id="text2161" fill="#000" fill-opacity="1" stroke="none" stroke-width=".72233355px" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1"/>
                        </svg>
                        <svg 
                          id="eye-right"
                          xmlns="http://www.w3.org/2000/svg"
                          width="75" 
                          height="100" 
                          version="1.0">
                          <path d="m 72.520861,60.915859 v 0 C 69.385207,53.011396 61.908243,46.570093 55.74346,42.387465 49.578631,38.204905 40.408101,36.818968 33.679899,37.051071 c -1.597953,0.05517 -2.931531,0.451253 -4.000736,1.188245 -0.738155,0.570053 -1.097854,1.127016 -1.079089,1.670881 0.02949,0.854739 0.93486,2.69053 2.716108,5.507379 0.805175,1.372521 1.234574,2.83577 1.288193,4.389751 0.131362,3.807345 -0.983571,6.879734 -3.344801,9.217182 -2.361227,2.337476 -5.686459,3.580206 -9.975699,3.728183 C 15.162859,62.894893 11.580282,61.559887 8.5361375,58.747669 5.4920363,55.935482 3.8975877,52.431474 3.7527937,48.235627 c -0.1769131,-5.1282 2.0835359,-9.776522 6.7813483,-13.944986 4.697855,-4.168379 11.041643,-6.390426 19.031387,-6.666142 8.662566,-0.298838 16.811229,2.201105 24.446015,7.499833 7.634738,5.298806 13.804506,13.895976 18.509317,25.791527 z" id="text2161" fill="#000" fill-opacity="1" stroke="none" stroke-width=".72233355px" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1"/>
                        </svg>
                        <p class=book-title>${book.title}</p>
                        <p class=author>${book.author}</p>
            </div>
          </div>
          <div class="left-side">
            <h2>
              <span>${book.author}</span>
              <span>${book.title}</span>
            </h2>
          </div>
        </div>
      </div>`
        yourBooks.appendChild(bookDiv);
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            render();
        });
    });
}