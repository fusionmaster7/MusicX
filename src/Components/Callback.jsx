import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Store/Context";
import axios from "axios";
import "./Styles/Callback.css";

const Callback = () => {
  const getHashParams = () => {
    let hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };
  let history = useHistory();
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    console.log(state.user);
    const params = getHashParams();
    const token = params.access_token;
    if (token && !state.user) {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const userObj = {
            display_name: res.data.display_name,
            id: res.data.id,
            uri: res.data.uri,
            images: res.data.images,
            followers: res.data.followers,
          };
          dispatch({ type: "LOGIN", payload: { ...userObj } });
          history.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  return <div>Loading User data...</div>;
};

export default Callback;
