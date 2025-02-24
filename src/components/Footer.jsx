import React from "react";
import "../components/Footer.scss";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <a
          aria-label="Link to BookBark's Homepage"
          className="logo-footer"
          href="/"
        >
          <span className="footer-logo">
            <img
              alt="BookBark Logo"
              className="img-responsive"
              height="26"
              src="/images/bookmarkLogo.png"
              width="203"
            />
          </span>
        </a>
      </div>

      <div className="footer-middle">
        <div className="footer-nav">
          <div className="footer-nav-item">
            <p className="nav-title">Support</p>
            <p className="nav-item">
              <a className="nav-link" href="mailto:bookbark@gmail.com">
                Discussion Questions
              </a>
            </p>
            <p className="nav-item">
              <a className="nav-link" href="mailto:bookbark@gmail.com">
                Contact Us
              </a>
            </p>
            <p className="nav-item">
              <a className="nav-link" href="mailto:bookbark@gmail.com">
                How To Guides
              </a>
            </p>
            <p className="nav-item">
              <a className="nav-link" href="mailto:bookbark@gmail.com">
                FAQs
              </a>
            </p>
          </div>
        </div>

        <div className="subscribe-block">
          <p className="nav-title">Connect</p>
          <p className="nav-item">
            Join the BookBark newsletter for monthly reading recommendations,
            book club tips, giveaways, and more.
          </p>

          <div className="blog-subscribe relative subscribe-top-books customer-subscribe">
            <div className="center">
              <div className="pt-[10px] relative">
                <div className="pt-2 pb-5">
                  <p className="subscribe-title">
                    Enter your email to receive BookBark's newsletter with
                    reading recommendations and the most popular book club books
                    each month.
                  </p>
                  <form className="form-subscribe" noValidate>
                    <input
                      aria-label="Email address"
                      className="input-form"
                      placeholder="Email address"
                      type="email"
                    />
                    <Button
                      type="button"
                      variant="contained"
                      sx={{
                        backgroundColor: "#dbc39a",
                        color: "#333",
                        "&:hover": {
                          backgroundColor: "#c8ae89",
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 BookBark, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
