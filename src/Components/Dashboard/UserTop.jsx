//Component for rendering user's top artists and tracks
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../Store/Context";
import "../Styles/UserTop.css";

import { IoMdHeartEmpty } from "react-icons/io";

const UserTop = () => {
  const [state, dispatch] = useContext(Context);
  const renderTrack = (trackObj) => {
    return (
      <div className="track">
        <div className="track-div">
          <img src={trackObj.img} className="track-img" alt="Track" />
        </div>
        <div className="track-div">{trackObj.name}</div>
        <div className="track-div">{trackObj.artist}</div>
        <div className="track-div">{trackObj.length}</div>
        <div className="track-div" id="save-icon">
          <IoMdHeartEmpty />
        </div>
      </div>
    );
  };
  const getTracks = async () => {
    const res = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      params: {
        limit: 4,
      },
      headers: { Authorization: `Bearer ${state.user.token}` },
    });
    let tracks = [];
    res.data.items.forEach((e) => {
      let trackObj = {};
      trackObj.name = e.name;
      trackObj.artist = e.artists[0].name;
      trackObj.img = e.album.images[0].url;
      let len = e.duration_ms / 1000;
      trackObj.length = `${Math.floor(len / 60)}:${Math.floor(len % 60)}`;
      tracks.push(trackObj);
    });
    dispatch({ type: "TRACKS", payload: tracks });
  };
  useEffect(() => {
    getTracks();
  }, []);
  return (
    <div className="top">
      <div className="top-heading">Your Tracks and Artists</div>
      <div className="usr-btns">
        <button className="usr-btn">Tracks</button>
        <button className="usr-btn">Artists</button>
      </div>
      <div className="tracks">
        {renderTrack(state.tracks[0])}
        {renderTrack(state.tracks[1])}
        {renderTrack(state.tracks[2])}
        {renderTrack(state.tracks[3])}
      </div>
    </div>
  );
};

export default UserTop;
