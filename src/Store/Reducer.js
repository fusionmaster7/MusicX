const Reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    case "PLAYING":
      return {
        ...state,
        nowPlaying: payload,
      };
    case "CHARTS":
      return {
        ...state,
        charts: [...payload],
      };
    case "TRACKS":
      return {
        ...state,
        tracks: [...payload],
      };
    default:
      return state;
  }
};

export default Reducer;
