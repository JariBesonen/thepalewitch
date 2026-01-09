import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/Community.css";
import { useLocation, useNavigate } from "react-router-dom";

function Community() {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {
    const displayPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/message/display`
        );
        const data = await response.json();
        console.log(data);
        setResults(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (location.pathname === "/community") {
      displayPosts();
    }
  }, [location.pathname]);

  

  const handlePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      return console.log("token not found during handlePost frontend");
    }
    console.log("frontend token check", token);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/message/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message }),
        }
      );
      if (!response.ok) {
        console.log(error.message);
      } else {
        const data = await response.json();
        console.log(data);

        setResults(data);
        setMessage("");
        window.location.reload();
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="community-page-wrapper">
      <span className="community-wrapper-heading">
        leave a comment or ask a question
      </span>
      <div className="community-post-wrapper">
        {error && <p>{error.message}</p>}
        <div className="community-output-wrapper">
          <div className="scroll-box">
            {results.length ? (
              results.map((result) => (
                <div className="single-post-wrapper" key={result.messageid}>
                  <span className="single-post-message">{result.message}</span>
                  <span>- {result.username}</span>
                  <div className="post-options-wrapper">
                    <button
                      onClick={() => navigate(`/reply/${result.messageid}`)}
                      className="reply-btn"
                    >
                      reply
                    </button>
                    <button className="like-message-btn">like</button>
                   

                    <span>5like</span>
                    <button className="report-message-btn">report</button>
                  </div>
                </div>
              ))
            ) : (
              <p>no results..</p>
            )}
          </div>
        </div>
        <form onSubmit={handlePost} className="community-form">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">post</button>
        </form>
      </div>
    </div>
  );
}

export default Community;
