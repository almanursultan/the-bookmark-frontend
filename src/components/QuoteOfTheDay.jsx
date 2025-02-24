import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/QuoteOfTheDay.scss";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/books/random-quote")
      .then((response) => setQuote(response.data))
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

  return (
    <div className="quote-of-the-day-container">
      <h2 className="quote-title">Quote of the Day</h2>
      {quote && (
        <blockquote className="quote-block">
          <p className="quote-text">"{quote.quote}"</p>
          <cite className="quote-author">- {quote.author}</cite>
        </blockquote>
      )}
    </div>
  );
};

export default QuoteOfTheDay;
