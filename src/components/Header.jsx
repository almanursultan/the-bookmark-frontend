import React from "react";
import { Link } from "react-router-dom";
import "../components/Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <img
          src="/images/bookmarkLogo.png"
          alt="Bookmark Logo"
          className="header-logo-image"
        />
        <span className="header-title">The BookBark</span>
      </Link>

      <div className="auth-buttons">
        <button className="auth-btn">Login</button>
        <button className="auth-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
