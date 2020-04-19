//Component for rendering user's top artists and tracks
import React from "react";
import "../Styles/UserTop.css";

import { IoMdHeartEmpty } from "react-icons/io";

const UserTop = () => {
  return (
    <div className="top">
      <div className="top-heading">Your Tracks and Artists</div>
      <div className="usr-btns">
        <button className="usr-btn">Tracks</button>
        <button className="usr-btn">Artists</button>
      </div>
      <div className="tracks">
        <div className="track">
          <div className="track-div">
            <img
              src="https://via.placeholder.com/40"
              className="track-img"
              alt="Track"
            />
          </div>
          <div className="track-div">Name</div>
          <div className="track-div">Artist</div>
          <div className="track-div">Length</div>
          <div className="track-div" id="save-icon">
            <IoMdHeartEmpty />
          </div>
        </div>
        <div className="track">
          <div className="track-div">
            <img
              src="https://via.placeholder.com/40"
              className="track-img"
              alt="Track"
            />
          </div>
          <div className="track-div">Name</div>
          <div className="track-div">Artist</div>
          <div className="track-div">Length</div>
          <div className="track-div" id="save-icon">
            <IoMdHeartEmpty />
          </div>
        </div>
        <div className="track">
          <div className="track-div">
            <img
              src="https://via.placeholder.com/40"
              className="track-img"
              alt="Track"
            />
          </div>
          <div className="track-div">Name</div>
          <div className="track-div">Artist</div>
          <div className="track-div">Length</div>
          <div className="track-div" id="save-icon">
            <IoMdHeartEmpty />
          </div>
        </div>
        <div className="track">
          <div className="track-div">
            <img
              src="https://via.placeholder.com/40"
              className="track-img"
              alt="Track"
            />
          </div>
          <div className="track-div">Name</div>
          <div className="track-div">Artist</div>
          <div className="track-div">Length</div>
          <div className="track-div" id="save-icon">
            <IoMdHeartEmpty />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTop;
