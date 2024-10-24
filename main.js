const bookStorageKey = "LOCAL_BOOK_STORAGE_KEY";

function getBook() {
  return JSON.parse(localStorage.getItem(bookStorageKey)) || [];
}

function addBook(event) {
  event.preventDefault();

  const books = getBook();

  const bookFormTitleField = document.getElementById("bookFormTitle").value;
  const bookFormAuthorField = document.getElementById("bookFormAuthor").value;
  const bookFormYearField = parseInt(
    document.getElementById("bookFormYear").value
  );
  const bookFormIsCompleteCheckbox =
    document.getElementById("bookFormIsComplete").checked;

  const bookId = new Date().getTime();
  const book = {
    id: bookId,
    title: bookFormTitleField,
    author: bookFormAuthorField,
    year: bookFormYearField,
    isComplete: bookFormIsCompleteCheckbox,
  };

  books.push(book);
  localStorage.setItem(bookStorageKey, JSON.stringify(books));
  ViewBook();
  document.getElementById("bookForm").reset();
}

function ViewBook() {
  const completeBookList = document.getElementById("completeBookList");
  const incompleteBookList = document.getElementById("incompleteBookList");

  completeBookList.innerHTML = "";
  incompleteBookList.innerHTML = "";

  if (getBook() !== null) {
    getBook().map((book) => {
      const id = book.id;
      const title = book.title;
      const author = book.author;
      const year = book.year;
      const isComplete = book.isComplete;

      let bookCard = document.createElement("div");
      bookCard.classList.add("card");
      bookCard.setAttribute("data-bookid", id);
      bookCard.setAttribute("data-testid", "bookItem");

      bookCard.innerHTML = `
        <h3 data-testid="bookItemTitle">${title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${author}</p>
        <p data-testid="bookItemYear">Tahun: ${year}</p>
        <div>
        <button data-testid="bookItemIsCompleteButton" class="button-done" onClick="moveBook(${id})">${
        isComplete ? "Belum Selesai Dibaca" : "Selesai Dibaca"
      }</button>
        <button data-testid="bookItemDeleteButton" class="button-delete" onClick="deleteBook(${id})">Hapus Buku</button>
        </div>`;

      if (isComplete) {
        completeBookList.appendChild(bookCard);
      } else {
        incompleteBookList.appendChild(bookCard);
      }
    });
  }
}

function moveBook(id) {
  const movedbooks = getBook().map((book) => {
    if (book.id === id) {
      book.isComplete = !book.isComplete;
    }
    return book;
  });
  localStorage.setItem(bookStorageKey, JSON.stringify(movedbooks));
  ViewBook();
}

function deleteBook(id) {
  let newbooks = getBook();
  newbooks = newbooks.filter((book) => book.id !== id);
  localStorage.setItem(bookStorageKey, JSON.stringify(newbooks));
  ViewBook();
}

function searchBook(event) {
  event.preventDefault();

  const searchBookTitleField = document
    .getElementById("searchBookTitle")
    .value.toLowerCase();

  getBook().map((book) => {
    if (book.title.toLowerCase().includes(searchBookTitleField)) {
      const bookItem = document.querySelector(`[data-bookid="${book.id}"]`);
      bookItem.classList.add("highlight");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("bookForm").addEventListener("submit", addBook);
  document.getElementById("searchBook").addEventListener("submit", searchBook);

  const searchInput = document.getElementById("searchBookTitle");
  searchInput.addEventListener("input", function () {
    if (searchInput.value === "") {
      const searchedBook = document.querySelectorAll(".highlight");

      searchedBook.forEach((book) => {
        book.classList.remove("highlight");
      });
    }
  });

  ViewBook();
});
