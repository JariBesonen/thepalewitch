import React, { useEffect, useState } from "react";
import ProfileNav from "../Components/ProfileNav";
import "../Styles/MyPosts.css";
function MyComments() {
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const displayMyComments = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/comments/displayMyComments`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setComments(data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    displayMyComments();
  }, []);

  const handleDeleteComment = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/comments/deleteComment/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      window.location.reload();
    } catch (error) {
      // setDeletePostError(error);
      console.log(error);
    }
  };
  return (
    <div className="my-comments-page">
      <ProfileNav />

      <div className="my-comments-list">
        {error && <p>{error.message}</p>}
        {comments.length ? (
          comments.map((comment) => (
            <div className="single-comment" key={comment.id}>
              <span>{comment.comment}</span>
              <span>{comment.username}</span>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="delete-comment-btn"
              >
                delete
              </button>
            </div>
          ))
        ) : (
          <p>no results</p>
        )}
      </div>
    </div>
  );
}

export default MyComments;
