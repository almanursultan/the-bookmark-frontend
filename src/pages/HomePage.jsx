import React from "react";
import BookSearch from "../components/BookSearch";
import BestBooks from "../components/BestBooks";
import QuoteOfTheDay from "../components/QuoteOfTheDay";
import RecommendedBooks2025 from "../components/RecommendedBooks2025";
import BookOfTheDay from "../components/BookOfTheDay";

const HomePage = () => {
  return (
    <div>
      <BookSearch />
      <BookOfTheDay />
      <QuoteOfTheDay />
      <RecommendedBooks2025 />
      <BestBooks />
    </div>
  );
};

export default HomePage;
