import React, { useReducer, createContext } from "react";
import Reducer from "./Reducer";

const initialState = {
  isAuth: false,
  user: null,
  nowPlaying: {
    trackName: "",
    trackArtist: "",
    url: "https://via.placeholder.com/150",
    playing: false,
  },
  charts: [{}, {}, {}, {}, {}],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
