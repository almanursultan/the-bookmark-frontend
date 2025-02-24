import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../pages/BookDetailsPage.scss";

const BookDetails = () => {
  const { state } = useLocation();
  const book = state?.book;
  const navigate = useNavigate();

  if (!book) {
    return <p>No book details available.</p>;
  }

  const goToBookClub = () => {
    if (book.volumeInfo.title) {
      navigate(`/book-clubs/${book.volumeInfo.title}`);
    } else {
      navigate("/book-clubs");
    }
  };

  return (
    <div className="book-details-container">
      <h2 className="book-details-title">{book.volumeInfo.title}</h2>
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="book-details-image"
        />
      )}
      <p className="book-details-author">
        <strong>Author:</strong> {book.volumeInfo.authors?.join(", ")}
      </p>
      <p className="book-details-description">
        <strong>Description:</strong> {book.volumeInfo.description}
      </p>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#dbc39a",
          color: "#333",
          "&:hover": {
            backgroundColor: "#c8ae89",
          },
        }}
        onClick={goToBookClub}
      >
        Join Book Club
      </Button>
    </div>
  );
};

export default BookDetails;
