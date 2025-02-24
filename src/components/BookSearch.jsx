import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../components/BookSearch.scss";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`, { state: { book } });
    setShowDropdown(false);
    setQuery("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a search term!");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/books/search?q=${query}`
      );
      setBooks(response.data.items || []);
      setShowDropdown(true);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/books/search?q=${value}`
        );
        setBooks(response.data.items || []);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    } else {
      setBooks([]);
      setShowDropdown(false);
    }
  };

  return (
    <div className="book-search-container">
      <h2 className="book-search-title">Search for Books</h2>
      <form onSubmit={handleSearch} className="book-search-form">
        <TextField
          label="Search by title or author..."
          variant="outlined"
          value={query}
          onChange={handleInputChange}
          className="book-search-input"
          fullWidth
          sx={{
            "& label.Mui-focused": {
              color: "#dbc39a",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#dbc39a",
              },
              "&:hover fieldset": {
                borderColor: "#dbc39a",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#dbc39a",
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#dbc39a",
            color: "#333",
            "&:hover": {
              backgroundColor: "#c8ae89",
            },
          }}
        >
          Search
        </Button>
      </form>

      {showDropdown && books.length > 0 && (
        <Paper className="book-search-dropdown">
          <List>
            {books.map((book) => (
              <ListItemButton
                key={book.id}
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-result-image"
                />
                <ListItemText
                  primary={book.volumeInfo.title}
                  secondary={book.volumeInfo.authors?.join(", ")}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default BookSearch;
