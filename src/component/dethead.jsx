import React from "react";  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css'


const Dethead = ({ info, handleCloseModal }) => {


    return (
        <div className="hmmhead">
            <FontAwesomeIcon icon={faTimes} className="barcode-xy" onClick={handleCloseModal} style={{ transform: "translate(15px, 4px)", scale: "1.4"}}/>
            <div >
                <h3>Ticket Details</h3>
            </div>
            <a  href="http://ticketmaster.com">Help</a>
        </div>
    )
}

export default Dethead;