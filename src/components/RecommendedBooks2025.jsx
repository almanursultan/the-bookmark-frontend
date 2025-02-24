import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/RecommendedBooks2025.scss";

const RecommendedBooks2025 = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/books/recommend-books")
      .then((response) => setBooks(response.data))
      .catch((error) =>
        console.error("Error fetching recommended books:", error)
      );
  }, []);

  return (
    <div className="recommended-books-container">
      <h2 className="recommended-books-title"> Recommended Books for 2025</h2>
      {books.length > 0 ? (
        <ul className="recommended-books-list">
          {books.map((book, index) => (
            <li key={index} className="recommended-book-item">
              <img
                src={
                  book.image
                    ? `http://localhost:8080${book.image}`
                    : "/book-covers/default-cover.png"
                }
                alt={book.title}
                className="book-cover-image"
              />
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">
                  <strong>Author:</strong> {book.author}
                </p>
                <p className="book-genre">
                  <strong>Genre:</strong> {book.genre}
                </p>
                <p className="book-release-date">
                  <strong>Release Date:</strong> {book.release_date}
                </p>
                <p className="book-publisher">
                  <strong>Publisher:</strong> {book.publisher}
                </p>
                <p className="book-description">
                  <strong>Description:</strong> {book.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-books-message">No recommended books available.</p>
      )}
    </div>
  );
};

export default RecommendedBooks2025;
