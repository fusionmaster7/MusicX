import React, { useEffect } from "react";

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
  useEffect(() => {
    const params = getHashParams();
    const token = params.access_token;
    console.log(token);
  });
  return <h1>Call back here</h1>;
};

export default Callback;
