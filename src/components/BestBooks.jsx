import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/BestBooks.scss";

const BestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/books/best-books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching best books:", error));
  }, []);

  return (
    <div className="best-books-container">
      <h2 className="best-books-title">Best Books of 2024</h2>
      <ul className="best-books-list">
        {books.map((book) => (
          <li key={book.id} className="best-book-item">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">Author: {book.author}</p>

            <p className="book-rating">Rating: {book.rating}⭐</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestBooks;
