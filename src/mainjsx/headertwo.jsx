import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import flag_2 from './homeimg/usa_flag.jpg'
import flag from './homeimg/uk.jpg'
import '../App.css';

const Headertwo = ({ onCloseTicket, displayhome, info }) => {
  return (
    <nav className="navbar-grid">
      <div className="nav-left" onClick={onCloseTicket}>
        <FontAwesomeIcon icon={faTimes} style={{ color: "transparent"}}/>
      </div>
      <div className="nav-center">
        <p className={displayhome ? "invisible" : ""} style={{display: "flex", justifyContent: "center", gap: "7px", marginBottom: "5px" }}>My Events 
        <div style={{
          borderRadius: "50%",
          border: "1px solid grey",
          width:"1.2rem",
          height: "1.2rem",
          display: "grid",
          placeItems: "center",
          padding: "2px",
          transform: "translateY(-3px)"
        }}>
          <img src={flag_2} alt="" style={{width: "1.2rem", borderRadius: "50%", height: "1.2rem", objectFit: "cover" }}/>
        </div>
        </p>
      </div>
      <div className="nav-right">
        <a href='http://google.com' className={displayhome ? "invisible" : ""}>
          Help
        </a>
      </div>
    </nav>
  );
};

export default Headertwo;
