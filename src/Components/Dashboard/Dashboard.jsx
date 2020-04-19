//Component for rendering Dashboard
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../Store/Context";
import "../Styles/Dashboard.css";

import Chart from "./Chart";
import Search from "./Search";
import UserTop from "./UserTop";
import Player from "./Player";

//Icons import
import {
  MdHome,
  MdAlbum,
  MdLibraryMusic,
  MdAccessTime,
  MdInsertDriveFile,
  MdPlaylistPlay,
  MdPlaylistAdd,
  MdMenu,
} from "react-icons/md";

const Dashboard = () => {
  const [state, dispatch] = useContext(Context);
  let history = useHistory();
  /*useEffect(() => {
    console.log(state.user);
    if (!state.isAuth) {
      history.push("/");
    }
  });*/
  return (
    <div className="dash-container">
      <div className="nav">
        <div className="collapse" id="collapse-btn">
          <MdMenu />
        </div>
        <div className="nav-header">
          <div className="user-name">Hardik Singh</div>
          <div className="user-email">hardiksingh297@gmail.com</div>
        </div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdHome />
          </span>{" "}
          Home
        </div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdLibraryMusic />
          </span>{" "}
          Browse
        </div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdAlbum />
          </span>{" "}
          Albums
        </div>
        <div id="option-1">My Music</div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdAccessTime />
          </span>{" "}
          Recently Played
        </div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdInsertDriveFile />
          </span>{" "}
          Local Files
        </div>
        <div id="option-1">Playlists</div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdPlaylistPlay />
          </span>{" "}
          All Playlists
        </div>
        <div className="nav-option">
          <span id="nav-icon">
            <MdPlaylistAdd />
          </span>{" "}
          New Playlist
        </div>
      </div>
      <div>
        <Search />
        <Chart />
        <div className="lower-dash">
          <div style={{ width: "50%", marginRight: "10px" }}>
            <UserTop />
          </div>
          <div style={{ width: "50%" }}>
            <Player />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
