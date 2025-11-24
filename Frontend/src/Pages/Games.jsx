import React from "react";
import "../Styles/Game.css";
// import { useState } from "react";
function Games() {
  // const [libGameTitle, setLibGameTitle] = useState("");
  // const [error, setError] = useState(null);
  return (
    <div className="gamepage-wrapper">
      <div className="game-wrapper">
        <h2>game title</h2>
        <div className="img-preview">img</div>
        <button className="steam-link-btn">View on Steam</button>
      </div>
      <div className="game-wrapper">
        <h2>game title</h2>
        <div className="img-preview">img</div>
        <button className="steam-link-btn">View on Steam</button>
      </div>
      <div className="game-wrapper">
        <h2>game title</h2>
        <div className="img-preview">img</div>
        <button className="steam-link-btn">View on Steam</button>
      </div>
    </div>
  );
}

export default Games;
