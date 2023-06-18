import React from "react";
import ChartComponent from "./ChartComponent";

const LargeContainer = () => {
  return (
    <div className="large-container">
      <h2>Spending - Last 7 days</h2>

      <div className="graph">
        <ChartComponent />
      </div>

      <p className="this-month">Total this month</p>
      <div className="total">
        <div className="left">
          <h1>$478.33</h1>
        </div>
        <div className="right">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default LargeContainer;
