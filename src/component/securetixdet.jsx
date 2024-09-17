import React from "react";
import '../App.css'



function Sdet() {


    return (
        <div className="Sdet">
            <div className="Sdetdiv">
                <h4>Securely loading your account details..</h4>
                <div className="loading-container">
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
            </div>
        </div>
    )
}

export default Sdet;