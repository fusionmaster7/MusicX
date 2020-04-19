//Component for rendering Music Player
import React from "react";
import "../Styles/Player.css";

import { MdPlayArrow, MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Player = () => {
  return (
    <div className="pl-container">
      <div className="pl-heading">Now Playing</div>
      <div className="pl-subheading">6 in queue</div>
      <div className="pl">
        <div className="track-info">
          <div>
            <img
              src="https://via.placeholder.com/140"
              alt="Now Playing"
              className="pl-img"
            />
          </div>
          <div id="t-name">Track Name</div>
          <div id="t-artist">Track Artist</div>
          <div>Playback line here</div>
        </div>
        <div className="pl-btns">
          <div>
            <button className="pl-btn">
              <MdSkipPrevious />
            </button>
          </div>
          <div>
            <button className="pl-btn">
              <MdPlayArrow />
            </button>
          </div>
          <div>
            <button className="pl-btn">
              <MdSkipNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
