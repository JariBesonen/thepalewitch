import React, { useEffect, useState } from "react";
import "../Styles/Reply.css";
import { useParams } from "react-router-dom";

function Reply() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [rows, setRows] = useState([]); // this will hold the array from backend
  const [newComment, setNewComment] = useState("");
  const [postCommentError, setPostCommentError] = useState(null);
  const postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/comments/post/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({newComment}),
      });
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      setPostCommentError(error);
    }
  };

  useEffect(() => {
    const getPostAndComments = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/comments/display/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to load comments");
        }

        const data = await res.json();
        console.log(data);

        setRows(data); // data is the array
      } catch (err) {
        setError(err);
      }
    };

    getPostAndComments();
  }, [id]);

  // the post message is the same for every row, so just use the first one
  const postMessage = rows.length > 0 ? rows[0].message : "";
 


  return (
    <div className="reply-page-wrapper">
      {error && <p>{error.message}</p>}
      {postCommentError && <p>{postCommentError.message}</p>}

      <div className="main-post-wrapper">
        <span>{postMessage}</span>
      </div>

      <div className="comments-wrapper">
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <div className="individual-comment-wrapper" key={index}>
              <span className="comment">{row.comment}</span>
            </div>
          ))
        ) : (
          <p>no comments..</p>
        )}
        <form onSubmit={postComment} className="comment-form">
          <input
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            className="comment-input"
            type="text"
          />
          <button type="submit" className="comment-btn">
            reply
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reply;
