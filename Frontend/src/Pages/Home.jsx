import React from "react";
import "../Styles/Home.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Home() {
  const [gameTitle, setGameTitle] = useState("");
  const [gameDes, setGameDes] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const getHeroGameDetails = async () => {
      console.log("loading");
      try {
        const response = await fetch("/api/details/getHeroGameDetails");
        const data = await response.json();
        if (!response.ok) {
          throw new Error("error");
        }
        setGameTitle(data[0].gametitle);
        setGameDes(data[0].gamedes);
      } catch (error) {
        setError(error);
      }
    };
    if (location.pathname === "/") {
      getHeroGameDetails();
    }
  }, [location.pathname === "/"]);

  return (
    <div className="homepage-wrapper">
      {error && <span>{error.message}</span>}
      <div className="hero-section">
        <div className="hero-video-wrapper">trailer</div>
        <div className="hero-video-info">
          <h2>{gameTitle}</h2>
          <span>{gameDes}</span>
          <button>Wishlist to Steam</button>
        </div>
      </div>
      <div className="img-carousel-wrapper">
        <div className="carousel-imgs" id="img-one">
          one
        </div>
        <div className="carousel-imgs" id="img-two">
          two
        </div>
        <div className="carousel-imgs" id="img-three">
          three
        </div>
      </div>
      <div className="call-to-action-wrapper">
        <div className="newsletter-wrapper">
          <h3>Sign Up For Updates</h3>
          <h4>Email address</h4>
          <input type="text" />
          <button>Subscribe</button>
        </div>
        <div className="support-wrapper">
          <h3>Support My Game Dev Journey</h3>
          <button>Support Me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
