import React from "react";
import "../Styles/Home.css";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Home() {
  const [gameTitle, setGameTitle] = useState("");
  const [gameDes, setGameDes] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const joinCommunity = (e) => {
    e.preventDefault();
    const accountExist = localStorage.getItem("token");
    if (!accountExist) {
      navigate("/register");
    } else {
      navigate("/community");
    }
  };

  useEffect(() => {
    const loadHeroSection = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/details/hero-section`
        );
        // process.env.VITE_API_URL//api/details/getHeroGameDetails
        const data = await response.json();
        if (!response.ok) throw new Error("error");
        setGameTitle(data[0].gametitle);
        setGameDes(data[0].gamedes);
      } catch (error) {
        setError(error);
      }
    };

    if (location.pathname === "/") {
      loadHeroSection();
    }
  }, [location.pathname]); // instead of [location.pathname === "/"]

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
        <div className="join-community-wrapper">
          <h3>Join the Community</h3>
          <h4>Ask a question or leave a comment!</h4>
          <button onClick={joinCommunity}>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
