import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../Store/Context";

import "../Styles/Chart.css";

const Chart = () => {
  const [state, dispatch] = useContext(Context);
  const renderChart = (chartObj) => {
    return (
      <div className="chart">
        <img src={chartObj.image} alt="Chart Title" className="chart-img" />
        <div className="chart-title">{chartObj.name}</div>
        <div className="chart-artist">{chartObj.artist}</div>
      </div>
    );
  };
  let chartList = [];
  const getCharts = async () => {
    const res = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        params: {
          country: "IN",
          limit: "5",
        },
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      }
    );
    const resData = [...res.data.albums.items];
    resData.forEach((e) => {
      const newObj = {
        name: e.name,
        artist: e.artists[0].name,
        image: e.images[0].url,
      };
      chartList.push(newObj);
    });
    dispatch({ type: "CHARTS", payload: [...chartList] });
  };
  useEffect(() => {
    getCharts();
  }, []);
  return (
    <div className="charts-container">
      <div className="charts-heading">Top Charts </div>
      <hr className="charts-sep" />
      <div className="charts">
        {renderChart(state.charts[0])}
        {renderChart(state.charts[1])}
        {renderChart(state.charts[2])}
        {renderChart(state.charts[3])}
        {renderChart(state.charts[4])}
      </div>
    </div>
  );
};

export default Chart;
