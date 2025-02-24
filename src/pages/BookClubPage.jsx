import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import "../pages/BookClubPage.scss";

const BookClubPage = () => {
  const { title } = useParams();
  const [clubData, setClubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/book-clubs/${encodeURIComponent(title)}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError("No book club yet for this book. Coming soon!");
            setLoading(false);
            return;
          }
          throw new Error("Failed to fetch book club data");
        }

        const data = await response.json();

        setClubData(data[0] || null);
        setComments(data[0]?.comments || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load book club data.");
        setLoading(false);
      }
    };

    fetchClubData();
  }, [title]);

  const handleAddComment = async () => {
    if (name.trim() && newComment.trim()) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/book-clubs/${encodeURIComponent(
            title
          )}/comments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, comment: newComment }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to post comment");
        }

        const addedComment = await response.json();
        setComments([...comments, addedComment]);
        setName("");
        setNewComment("");
      } catch (err) {
        console.error("Error adding comment:", err);
        alert("Failed to add comment. Please try again.");
      }
    } else {
      alert("Please enter both your name and a comment.");
    }
  };

  if (loading) return <p>Loading book club data...</p>;
  if (error) return <p>{error}</p>;
  if (!clubData) return <p>No book club data found.</p>;

  return (
    <div className="book-club-page">
      <h2> Book Club: {clubData.club_name}</h2>
      <p>
        <strong>Book Title:</strong> {clubData.title}
      </p>
      <p>
        <strong>Author:</strong> {clubData.author}
      </p>
      <p>
        <strong>Description:</strong> {clubData.description}
      </p>
      <p>
        <strong>Members:</strong> {clubData.members}
      </p>

      {/* <hr /> */}
      <h3 className="comments-title">Discussion / Comments</h3>
      <section className="wrapper--comments">
        <div className="comments">
          <div className="comments-add-newcomment">
            <div className="comments-img"></div>
            <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="comment-form__group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="comment-form__group">
                <label htmlFor="comment">COMMENT</label>
                <textarea
                  id="comment"
                  name="comment"
                  className="text-area"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows="3"
                  placeholder="Add your comment..."
                  required
                ></textarea>
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#dbc39a",
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "#c8ae89",
                  },
                }}
                onClick={handleAddComment}
              >
                Submit Comment
              </Button>
            </form>
          </div>

          <div className="comments__list">
            {comments.map((c) => (
              <div key={c.id} className="comments__card">
                <div className="comments__avatar comments-img"></div>
                <div className="comments__content">
                  <div className="comments__header">
                    <p className="comments__name">{c.name}</p>
                  </div>
                  <p className="comments__text">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookClubPage;
