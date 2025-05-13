import React from "react";
import "./subs.css";

const Subs = () => {
  return (
    <div id="subs-area">
      <div className="content">
        <h5>Join Our Newsletter</h5>
        <h2>Subscribe to get Updated with new offers</h2>
        <div className="bottom-area">
          <input type="text" placeholder="Enter Email Address" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Subs;
