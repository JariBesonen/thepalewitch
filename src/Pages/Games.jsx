import React from "react";
import "../Styles/Game.css";
function Games() {
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
