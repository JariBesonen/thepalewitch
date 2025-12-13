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
  }, [location.pathname === "/community"]);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/message/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );
      if (!response.ok) {
        console.log(error);
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
          {results.length ? (
            results.map((result) => (
              <div
                className="single-post-wrapper"
                key={result.id ?? result.message}
              >
                <span>{result.message}</span>
              </div>
            ))
          ) : (
            <p>no results..</p>
          )}
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
