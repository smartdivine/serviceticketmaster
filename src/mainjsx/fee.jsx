import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExclamationCircle, faLock, faArrowLeft, faArrowRight, faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import Headies from "../component/headerfortransfer";

const Sent = ({ info }) => {
  useEffect(() => {
    const element = document.querySelector(".load-trans");

    if (element) {
      // Add the CSS class
      element.classList.add("your-css-class");

      // Set a timeout to remove the CSS class after 5 seconds
      const timeoutId = setTimeout(() => {
        element.classList.remove("your-css-class");
      }, 5000); // 5000 milliseconds (5 seconds)

      // Cleanup the timeout if the component unmounts before the timeout
      return () => clearTimeout(timeoutId);
    }
  }, []);






  return (
    <div className="transfer-page">
      <Headies/>
      <div>
        <div className="error-side">
          <FontAwesomeIcon icon={faExclamationCircle} className="transfer-icon"/>
          <span>Ticket Transfer Error</span>
        </div>
        <div className="first-head-transfer">
          <h3>Transfer Was Denied</h3>
          <p>The ticketing system is configured to facilitate the transfer of tickets exclusively as pairs of linked tickets. This means that when transferring tickets, they must be sent together as a pair, and they can only be transferred to the designated recipient, <span style={{ fontWeight: "bolder"}}>{info.firstname} {info.lastname} ({info.email})</span>.</p>
          <p>This policy ensures the integrity and security of ticket transfers, guaranteeing that they are received and used as intended by our system <span style={{ fontSize: "12px"}}><FontAwesomeIcon icon={faLock}/></span></p>
        </div>
        <div className="section-head-transfer">
          <h3>What happens now?</h3>
          <p>
            After <span style={{ fontWeight: "bolder", color: "blackv"}}>{info.firstname} {info.lastname}</span> accepts the ticket transfer, the original tickets will no longer be considered valid. Once the tickets have been sent, they cannot be canceled. The transferred tickets will become active in {info.firstname}'s wallet within one hour after the transfer is successfully completed. This policy is designed to ensure the integrity of ticket transfers and uphold a fair and transparent process for all users.
          </p>
        </div>
        <div className="div">
          <Link to="/"><button><span style={{ fontSize: "12px"}}></span><FontAwesomeIcon icon={faArrowLeft}/> Done</button></Link>
          <Link to="/transfer"><button>TRANSFER 2 TICKETS <span style={{ fontSize: "12px"}}><FontAwesomeIcon icon={faArrowRight}/></span></button></Link>
        </div>
        <div>
        </div>
        <div className="session">
          <Link to="/" className="btt">
            <button>End Session <span style={{ fontSize: "12px"}}><FontAwesomeIcon icon={faTimes}/></span></button>
          </Link>
          <a href="http://google.com" className="learn">Learn more</a>
        </div>
      </div>
      <div className="load-trans"><span></span></div>
    </div>
  );
}

export default Sent;

