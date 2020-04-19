import React from "react";

import "../Styles/Chart.css";

const Chart = () => {
  return (
    <div className="charts-container">
      <div className="charts-heading">Top Charts</div>
      <hr className="charts-sep" />
      <div className="charts">
        <div className="chart">
          <img src="https://via.placeholder.com/200" alt="Chart Title" />
          <div className="chart-title">Chart Title</div>
          <div className="chart-artist">Chart Artist</div>
        </div>
        <div className="chart">
          <img src="https://via.placeholder.com/200" alt="Chart Title" />
          <div className="chart-title">Chart Title</div>
          <div className="chart-artist">Chart Artist</div>
        </div>
        <div className="chart">
          <img src="https://via.placeholder.com/200" alt="Chart Title" />
          <div className="chart-title">Chart Title</div>
          <div className="chart-artist">Chart Artist</div>
        </div>
        <div className="chart">
          <img src="https://via.placeholder.com/200" alt="Chart Title" />
          <div className="chart-title">Chart Title</div>
          <div className="chart-artist">Chart Artist</div>
        </div>
        <div className="chart">
          <img src="https://via.placeholder.com/200" alt="Chart Title" />
          <div className="chart-title">Chart Title</div>
          <div className="chart-artist">Chart Artist</div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
