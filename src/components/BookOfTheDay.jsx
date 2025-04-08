import React, { useEffect, useState } from "react";
import "../components/BookOfTheDay.scss";

const BookOfTheDay = ({ books }) => {
  const [bookOfTheDay, setBookOfTheDay] = useState(null);

  useEffect(() => {
    if (books && books.length > 0) {
      const today = new Date().toDateString();
      const seed = today
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const index = seed % books.length;
      setBookOfTheDay(books[index]);
    }
  }, [books]);

  if (!bookOfTheDay) return null;

  return (
    <div className="book-of-the-day-container">
      <h2 className="book-of-the-day-title">📅 Book of the Day</h2>
      <div className="book-of-the-day-card">
        <img
          src={bookOfTheDay.image}
          alt={bookOfTheDay.title}
          className="book-of-the-day-img"
        />
        <div>
          <h3>{bookOfTheDay.title}</h3>
          <p>
            <strong>Author:</strong> {bookOfTheDay.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheDay;
