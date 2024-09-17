import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faChevronLeft, faEllipsis, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';




const Head = () => {




    return (
        <nav className="navbar-grid sent-nav">
        <div className="nav-left">
          <FontAwesomeIcon icon={faChevronLeft} color="rgb(0, 0, 0, 0.75)"/>
        </div>
        <div className="nav-center sent-nav-center">
          <FontAwesomeIcon icon={faArchive} color="rgb(0, 0, 0, 0.75)"/>
          <FontAwesomeIcon icon={faTrash} color="rgb(0, 0, 0, 0.75)"/>
          <FontAwesomeIcon icon={faEnvelope} color="rgb(0, 0, 0, 0.75)"/>
          <FontAwesomeIcon icon={faEllipsis} color="rgb(0, 0, 0, 0.75)"/>
        </div>
      </nav>
    )
}

export default Head;