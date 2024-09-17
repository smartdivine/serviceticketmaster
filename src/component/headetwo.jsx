import React from "react";  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css'


const Headertwo = ({ info, handleCloseModal }) => {


    return (
        <div className="header-barcode">
            <FontAwesomeIcon icon={faTimes} className="barcode-x" onClick={handleCloseModal}/>
            <div>
                <h3>{info.title}</h3>
                <p>{info.time} - {info.location}</p>
            </div>
            <a href="http://ticketmaster.com">Help</a>
        </div>
    )
}

export default Headertwo;