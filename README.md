# Bookshelf App – A Simple Book Management Application
The Bookshelf App is a web-based application that allows users to efficiently manage their personal book collections. This project was built with HTML, CSS, and JavaScript, with data persistence handled through Local Storage, ensuring that book data remains intact even after refreshing the page or closing the browser.

**Features:**
- Add Books: Users can input book details such as title, author, year, and completion status (read or unread).
- Delete Books: Users can remove unwanted books from the list.
- Search Books: A search feature that allows users to find books by title, with the matching books highlighted in the list.
- Switch Book Status: Move books between "Complete" and "Incomplete" lists with a single click.
- Persistent Data Storage: All book data is stored in Local Storage, preserving data even after the browser is closed and reopened.

**Tech Stack:**
- HTML – for the structure and layout of the application.
- CSS – for styling the interface.
- JavaScript – for the application logic, including managing user interactions, updating the DOM, and handling localStorage.

**Challenges & Learnings:**
- Data Persistence with localStorage: Managing data updates efficiently without using a backend database.
- Dynamic DOM Manipulation: Rendering book lists and handling user input dynamically without page reloads.
- Form Handling & Validation: Ensuring valid user input to avoid errors in the application.

**How It Works:**
- Add a Book: Fill out the form with book details and submit.
- View Books: Books are displayed in "Complete" and "Incomplete" sections.
- Search for a Book: Type a title in the search bar to find specific books.
- Delete or Switch Book Status: Use action buttons to delete a book or change its completion status.

**Why This Project?**
This project was created to demonstrate skills in front-end development and the use of localStorage for state management without a backend. It also showcases proficiency in DOM manipulation, event handling, and building intuitive user interfaces.
