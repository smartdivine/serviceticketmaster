import React from "react";  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css'


const Standerheader = ({ info, handleCloseModal, events }) => {


    return (
        <div className="header-barcode" style={{ position: "fixed", top: 0}}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ marginTop: "16px", scale: "1.5"}}/>
            <div style={{color: "white", marginLeft: "20px"}}>
                <h3 style={{ fontSize: 20, overflow: "hidden", width: "18rem", textOverflow: "ellipsis"}}>{events.title}</h3>
                    <p>{events.day} • {events.date}, {events.year} • {events.time} </p>
            </div>
            <a href="http://ticketmaster.com">Support</a>
        </div>
    )
}

export default Standerheader;