import React, { useEffect, useState } from "react";
import ProfileNav from "../Components/ProfileNav";
import "../Styles/MyPosts.css";
function MyPosts() {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const displayMyPosts = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/message/displayMyPosts`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    displayMyPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/message/deletePost/${postId}`,
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
    <div className="my-posts-page">
      <ProfileNav />

      <div className="my-posts-list">
        {error && <p>{error.message}</p>}
        {posts.length ? (
          posts.map((post) => (
            <div className="single-post" key={post.messageid}>
              <span>{post.message}</span>
              <span>{post.username}</span>
              <button
                onClick={() => handleDeletePost(post.messageid)}
                className="delete-message-btn"
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

export default MyPosts;
