import React from "react";
import '../App.css'
function Loading() {
    return (
      <div className="loading-container loading-container1">
        <div className="loading-circle">
          <div className="loading-bar"></div>
          <div className="loading-bar" style={{ transform: "rotate(45deg)" }}></div>
          <div className="loading-bar" style={{ transform: "rotate(90deg)" }}></div>
          <div className="loading-bar" style={{ transform: "rotate(135deg)" }}></div>
          <div className="loading-bar" style={{ transform: "rotate(180deg)" }}></div>
          <div className="loading-bar" style={{ transform: "rotate(225deg)" }}></div>
          <div className="loading-bar" style={{ transform: "rotate(270deg)" }}></div>
          <div className="loading-bar" style={{ transform: "rotate(315deg)" }}></div>
        </div>
      </div>
    );
  }
  
  export default Loading;
  