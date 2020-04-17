import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Store/Context";
import "./Styles/Dashboard.css";

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
    <div className="db-container">
      <div className="nav">
        <div className="brand">MusicX</div>
        <h2 className="nav-title">Recommend</h2>
        <hr className="nav-sep" />
        <div className="nav-option">Explore</div>
        <div className="nav-option">Genres</div>
        <div className="nav-option">Artists</div>
        <div className="nav-option">Albums</div>
        <h2 className="nav-title">My Library</h2>
        <hr className="nav-sep" />
        <div className="nav-option" id="op-1">
          Recently Played
        </div>
        <div className="nav-option">Albums</div>
        <div className="nav-option">Favorite Songs</div>
      </div>
      <div className="db">
        <h1>Rest content here</h1>
      </div>
    </div>
  );
};

export default Dashboard;
