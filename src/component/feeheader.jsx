import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown, faChevronUp, faCircleExclamation, faEllipsis, faFlag, faSignInAlt, faSignOut, faStar, faUnlockKeyhole, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { dark, light } from "@material-ui/core/styles/createPalette";
import logo from "../mainjsx/homeimg/ticketmaster-logo.jpg"

const Header2 = ({info, events}) => {

    const [state, setstate] = useState(false)

    return (
        <div className="header_for_fee">
            <p></p>
            <div >
                <p>23 <p>Inbox</p></p>
                <FontAwesomeIcon icon={faStar} className="star-fee"/>
            </div>
            <div className="second-header-two">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p>Ticketmaster <p>Jul 13</p></p>
                    <p>
                        to me 
                        <FontAwesomeIcon icon={state ? faChevronUp : faChevronDown} className="chevron-fee" onClick={() => setstate(!state)}/>
                    </p>
                </div>
            </div>
            {state && (
                <div className="third-header-three">
                <div>
                    <p>From</p>
                    <p>Ticketmaster</p>
                    <p>support@ticketmaster.email.com</p>
                </div>
                <div>
                    <p>To</p>
                    <p>{info.yourClname}</p>
                    <p>brookecoco@gmail.com</p>
                </div>
            <div>
                <p>Date</p>
                <p>13 Jul 2024 at 10:49 PM</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faUnlockKeyhole} className="unlock-fee"/>
                <p>
                    Standard encryption (TLS)
                    <a href="#">Learn more</a>
                </p>
            </div> 
            </div>
            )}
            <head>
                <FontAwesomeIcon />
            </head>
        </div>
    )
}

export default Header2;