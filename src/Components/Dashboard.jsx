import React, { useContext } from "react";
import { Context } from "../Store/Context";

const Dashboard = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state.user);
  return <h1>Hello {state.user.display_name}</h1>;
};

export default Dashboard;
