// filename: sophisticatedCode.js

/**
 * Complex JavaScript code example
 * 
 * This code demonstrates a complex application for managing a library system.
 * It includes various classes and functions for creating, searching, and managing books,
 * as well as handling borrower information and due dates.
 * 
 * Note: This code is purely fictitious and should not be used in production.
 */

// ----------------------------- Constants -----------------------------------

const MAX_BOOKS = 100; // Maximum number of books allowed in the library

// ----------------------------- Book Class ----------------------------------

class Book {
  constructor(title, author, genre, totalCopies) {
    // Properties
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalCopies = totalCopies;
    this.availableCopies = totalCopies;
    this.borrowers = new Map(); // borrowerId -> dueDate
  }

  // Methods
  isAvailable() {
    return this.availableCopies > 0;
  }

  borrowBook(borrowerId, dueDate) {
    if (this.isAvailable()) {
      this.availableCopies--;
      this.borrowers.set(borrowerId, dueDate);
      return true;
    }
    return false;
  }

  returnBook(borrowerId) {
    if (this.borrowers.has(borrowerId)) {
      this.availableCopies++;
      this.borrowers.delete(borrowerId);
      return true;
    }
    return false;
  }
}

// ----------------------------- Library Class -------------------------------

class Library {
  constructor(name) {
    // Properties
    this.name = name;
    this.books = [];
  }

  // Methods

  addBook(book) {
    if (this.books.length < MAX_BOOKS) {
      this.books.push(book);
      return true;
    }
    return false;
  }

  searchBooksByAuthor(author) {
    const result = [];
    for (const book of this.books) {
      if (book.author.toLowerCase().includes(author.toLowerCase())) {
        result.push(book);
      }
    }
    return result;
  }

  searchBooksByGenre(genre) {
    const result = [];
    for (const book of this.books) {
      if (book.genre.toLowerCase().includes(genre.toLowerCase())) {
        result.push(book);
      }
    }
    return result;
  }
}

// ----------------------------- Usage Example ------------------------------

// Create a new library
const myLibrary = new Library("My Personal Library");

// Create a few books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 5);
const book2 = new Book("Pride and Prejudice", "Jane Austen", "Romance", 3);
const book3 = new Book("1984", "George Orwell", "Dystopian", 10);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Borrow a book
const borrowerId = 123;
const dueDate = new Date("2022-01-31");
book1.borrowBook(borrowerId, dueDate);

// Return a book
book1.returnBook(borrowerId);

// Search for books by author
const author = "Fitzgerald";
const booksByAuthor = myLibrary.searchBooksByAuthor(author);

// Search for books by genre
const genre = "Fiction";
const booksByGenre = myLibrary.searchBooksByGenre(genre);

// Print the results
console.log("Books by Author:", booksByAuthor);
console.log("Books by Genre:", booksByGenre);
console.log("Library:", myLibrary);