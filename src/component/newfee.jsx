import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faCopy, faLock } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";


function Nfee({ info, events }) {
  const [state, setstate] = useState(false)
    const handleBookTransaction = () => {
        console.log("Handling book transaction...");
        confirmAlert({
          title: "Confirm",
          message: "To complete your transaction, please confirm the available refund 0f 918 USD (£716.04) and tickets for Fabrizio.",
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                setInterval(() => {
                  setstate(true)
                }, 5000);
              },
            },
            {
              label: "No",
              onClick: () => console.log("User clicked 'No'"),
            },
          ],
        });
      };
      
    
    return (
    <div className="Nfee">
        <div>
        <span>ticketmaster</span>
        <h4>Your Transfer Has Been Processed</h4>
        <p>
          This ticket transfer is pending <span></span> Your transfer will be complete after TrustTicket is booked
        </p>
        </div>
        <div>
        <p>Hi <span>{info.yourClname}</span>,</p>
        <hr />
        <div>
          <p>
            This ticket transaction will automatically process once implied fee payment is successfully, <b>Fee was implied due to previous late fee payment which delayed for 59 minutes</b>
          </p>
          <hr />
          <p>
            Please <span>NOTE:</span> Tickets can't be accessed by the buyer due to the progress status of the transfer <FontAwesomeIcon icon={faLock} /> 
          </p>
          <hr />
          <p>
            The transfer session is pending and <span>CANNOT</span> be canceled until the session is complete. Failure can lead to ticket loss or confiscation of ticket(s).
          </p>
          <hr />
        </div>
        </div>
        <div className="nfee-last-part">
        <h3 style={{ marginBottom: 20}}>Transaction Details</h3>
        <p>Recipient name <span>{info.firstname} {info.lastname}</span></p>
        <p>Transfer Type <span>{info.type}</span></p>
        <p>Disco hotline <span>{info.disco}</span></p>
        <p>Vend type <span>Ticketmaster</span></p>
        <p>Transaction <span>231220097065547257 <span><FontAwesomeIcon icon={faCopy}/></span></span></p>
        <p>Transfer Date <span>{info.date1}</span></p>
        <div></div>
        <hr />
        <h3  style={{ marginBottom: 20, marginTop: 50}}>Event Info</h3>
        <p style={{ color: "grey", fontSize: 25}}>{events.time}, {events.year}</p>
        <p>{events.newday}</p>
        <p style={{ color: "black"}}>{events.location}</p>
        <p style={{ color: "black"}}>{events.state}</p>
        <p>{events.title}</p>
        <hr />
        <h3>Quantity</h3>
        <p style={{ marginTop: 3}}>x{events.tixsent} {events.tixsent < 2 ? "ticket" : "tickets"}</p>
        <hr />
        <h3>Line up</h3>
        <a href="#" style={{ display: "grid"}}>{info.lineup1}</a>
        <a href="#" style={{ display: "grid"}}>{info.lineup2}</a>
        <hr />
        <h3>Venue</h3>
        <a href="#" style={{ display: "grid"}}>{events.location}</a>
        <hr />
        <h3>Total</h3>
        <p style={{transform: "translateY(10px)"}}>FEE <span>{info.currency}{info.feeamount}</span></p>
        <p>VISA<span>**45</span></p>
        <div className="Nfee-btm" onClick={() => handleBookTransaction()}>
        <FontAwesomeIcon icon={faClockFour} className="Clockfour-Nfee" />
        <span>Book Transaction</span>
      </div>
        </div>
    </div>
    );
}

export default Nfee;
