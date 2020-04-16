const Reducer = (state, action) => {
  const [type, payload] = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
