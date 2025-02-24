import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BookClubPage from "./pages/BookClubPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/book-clubs/:title" element={<BookClubPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
