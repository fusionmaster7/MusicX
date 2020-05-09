//Component for rendering Music Player
import React, { useEffect, useContext } from "react";
import axios from "axios";
import "../Styles/Player.css";
import { Context } from "../../Store/Context";

import { MdPlayArrow, MdPause } from "react-icons/md";

const Player = () => {
  const [state, dispatch] = useContext(Context);
  const playbackHandler = async () => {
    if (state.playing) {
      const res = await axios.put(
        "https://api.spotify.com/v1/me/player/pause",
        null,
        { headers: { Authorization: `Bearer ${state.user.token}` } }
      );
      dispatch({ type: "PAUSE" });
    } else {
      const res = await axios.put(
        "https://api.spotify.com/v1/me/player/play",
        null,
        { headers: { Authorization: `Bearer ${state.user.token}` } }
      );
      dispatch({ type: "PLAY" });
    }
  };
  const nowPlaying = async () => {
    const res = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${state.user.token}` },
      }
    );
    console.log(res.data);
    const playerObj = {
      trackName: res.data.item.name,
      trackArtist: res.data.item.artists[0].name,
      url: res.data.item.album.images[0].url,
      uri: res.data.item.uri,
    };
    dispatch({ type: "PLAYING", payload: { ...playerObj } });
    if (res.data.is_playing) {
      dispatch({ type: "PLAY" });
    } else {
      dispatch({ type: "PAUSE" });
    }
  };
  useEffect(() => {
    setInterval(nowPlaying(), 20000);
  }, []);
  return (
    <div className="pl-container">
      <div className="pl-heading">Now Playing</div>
      <div className="pl-subheading">3 in queue</div>
      <div className="pl">
        <div className="track-info">
          <div>
            <img
              src={state.nowPlaying.url}
              alt="Now Playing"
              className="pl-img"
            />
          </div>
          <div id="t-name">{state.nowPlaying.trackName}</div>
          <div id="t-artist">{state.nowPlaying.trackArtist}</div>
          <div className="pl-btns">
            <div className="pl-btn" onClick={playbackHandler}>
              <MdPlayArrow />
            </div>
            <div className="pl-btn" onClick={playbackHandler}>
              <MdPause />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
