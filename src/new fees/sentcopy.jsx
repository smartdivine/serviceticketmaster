import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";
import Standerheader from "../component/standardhead";

function SentCopy ({event, info}) {
    const [state, setstate] = useState(false)
    const fee = info.price % info.feeamount
    const handleBookTransaction = () => {
        confirmAlert({
          title: <p>Click <b>"Yes"</b> to proceed</p>,
          message: (
                <div>
                <p>Total: {info.currency}{info.feeamount} x {event.tixsent < 2 ? `${event.tixsent} Ticket` : `${event.tixsent} Tickets`}</p>
                <p>Ticket Safety: {info.currency}123.76</p>
                <p>Total Refund: {info.currency}434.04</p>
            </div>
          ),
          buttons: [
            {
              label: "Yes",
              onClick: () => {
                setstate(true)
                setTimeout(() => {
                    setstate(false)
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
<>
<div className="ticketsentcopy" style={{overflow: "hidden"}}>
    <nav>
        <Standerheader events={event} info={info}/>
    </nav>
    <div style={{marginTop: "5rem"}}>
        <div className="top">
            <span>ticketmaster</span>
        </div>
        <div>
            <img src={event.image} alt="" />
            <p><strong>Initiation Date</strong> - {info.date1}</p>
            <p>{event.location} • {event.state}</p>
        </div>
        <div className="second-copy">
            <p>
                Important event info
                <FontAwesomeIcon icon={faExclamationCircle} className="faExclamationCircle"/>
            </p>
            <p>
            <b>Transfer Initiated:</b>{" "}
            Your transfer request for {event.tixsent < 2 ? `${event.tixsent} Ticket` : `${event.tixsent} Tickets`} to {info.firstname} ({info.email}) has been successfully submitted. The transfer is currently under review. To complete the process, kindly click "Proceed to Pay" to cover the associated fee of <b>{info.currency}{info.feeamount}</b>. This fee, attributed to the prior late payment, will be deducted from your card ending in 36**. {" "}
            <b>
                Note: All deducted fees will be transferred to the recipient's linked debit card upon completion of the transfer.
            </b>
            </p>
        </div>
        <button  onClick={() => handleBookTransaction()}>
            Proceed to Pay
        </button>
    </div>
    </div>
    {state&& (
<div className="load-trans your-css-class"><span></span></div>
    )}
    </>
)
}

export default SentCopy;