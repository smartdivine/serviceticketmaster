import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarAlt, faChevronLeft, faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css'


const Delay = ({event, info }) => {

document.body.style.background = 'red'
    return (
        <div className="delay">
            <div className="delay-head">
                <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: "20px"}}/>
                <div>
                    <p style={{fontWeight: "bold", fontSize: "14px", width: "91%",overflow: "hidden", whiteSpace: "nowrap"}}>{event.title}</p>
                    <p style={{color: "rgb(255,255,255, .9)", fontSize: "12px"}}>{event.day} • {event.date} • {event.time} - {event.location}</p>
                </div>
                <div>
                <div>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                    <FontAwesomeIcon icon={faHeart}/>
                </div>
                </div>
            </div>
            <div className="delay-center">
                Learn New Ways to Pay On Ticketmaster
            </div>
        </div>
    )
}


export default Delay;