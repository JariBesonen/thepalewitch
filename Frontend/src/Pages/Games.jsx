import React from "react";
import "../Styles/Game.css";
// import { useState } from "react";
function Games() {
  // const [libGameTitle, setLibGameTitle] = useState("");
  // const [error, setError] = useState(null);
  return (
    <div className="gamepage-wrapper">
      <div className="game-wrapper">
        <h2>Into The Mines</h2>
        <div className="img-preview">img</div>
        <button className="steam-link-btn">coming soon</button>
      </div>
      <div className="game-wrapper">
        <h2>untitled</h2>
        <div className="img-preview">img</div>
        <button className="steam-link-btn">not available</button>
      </div>
      <div className="game-wrapper">
        <h2>untitled</h2>
        <div className="img-preview">img</div>
        <button className="steam-link-btn">not available</button>
      </div>
    </div>
  );
}

export default Games;
