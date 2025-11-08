import React from "react";
import "../Styles/Home.css";
function Home() {
  return (
    <div className="homepage-wrapper">
      <div className="hero-section">
        <div className="hero-video-wrapper">trailer</div>
        <div className="hero-video-info">
          <h2>Into the Mines</h2>
          <span>a description about the game and the features within it</span>
          <button>wishlist to steam</button>
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
          <button>subscribe</button>
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
