import React, { useEffect, useContext } from "react";
import { Context } from "../Store/Context";

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
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    console.log(state.user);
    const params = getHashParams();
    const token = params.access_token;
    console.log(token);
  });
  return <h1>Call back here</h1>;
};

export default Callback;
