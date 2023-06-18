import React from "react";

const SmallContainer = () => {
  return (
    <div className="small-container">
      <div className="balance">
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>
      <div className="logo">
        <img src="/src/assets/images/logo.svg" alt="logo image" />
      </div>
    </div>
  );
};

export default SmallContainer;
