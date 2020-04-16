const Reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
