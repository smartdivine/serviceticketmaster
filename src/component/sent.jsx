import React, {
  useState
} from "react";
import Head from "./head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleExclamation, faEllipsis, faFlag, faSignInAlt, faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import '../App.css'
import Header2 from "./feeheader";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


const Fee = ({ info, events }) => {


  const handleBookTransaction = () => {
    confirmAlert({
        title: <p>Confirm <b>"Yes"</b> to proceed</p>,
        message: (
            <b>
              {info.currency}{info.feeamount} x 2 Tickets
            </b>
        ),
        buttons: [
            {
                label: "Yes",
            },
            {
                label: "No",
                onClick: () => console.log("User clicked 'No'"),
            },
        ],
    });
};

let display;
let icons;
let stage;
let hr = (
  <hr/>
);
let message;
let seatDetails = [];

for (let i = 0; i < events.tixsent; i++) {
  seatDetails.push(
    <p>
      SEC GA{events.initialSection}, Row GA{events.initialRow}, Seat {"-"}
    </p>
  );
}
let seat;
let endnumber;
const sent = events.numberOfSeats - events.tixsent

const confirmnum = events.numberOfSeats + events.startingSeatNumber -sent -1
if (confirmnum > events.startingSeatNumber) {
  endnumber = `- ${events.numberOfSeats + events.startingSeatNumber -sent -1}`
} else {
  endnumber = ""
}

if (events.Generaladmission) {
  seat = seatDetails;
} else {
  seat = `SEC ${events.initialSection}, ROW ${events.initialRow} SEAT ${events.startingSeatNumber} ${endnumber}`;
}

document.querySelector('meta[name="theme-color"]').content = '#fff'


if (info.feePaid === 1) {
  icons = (
    <div className="fee-stages">
      <span className="span">
        <FontAwesomeIcon icon={faSignOut} style={{ rotate: "270deg"}} className="fee-icon"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faEllipsis} className="odd-icons odd-icons-odd"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faSignInAlt} style={{ rotate: "90deg"}} className=""/>
      </span>
      <span>
        <FontAwesomeIcon icon={faCheck} className="odd-icons odd-icons-odd"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faFlag} className=""/>
      </span>
    </div>
  )
  display = (
    <p className="sent-info">
      {info.yourClname}, Your Ticket Transfer To {info.firstname} {info.lastname} ({info.email}) Is Pending!
    </p>
  )
  stage = (
    <div className="fee-stages stage">
      <span className="color-fee">Sent</span>
      <span>Pending</span>
      <span>Receive</span>
      <span>Accepted</span>
      <span>Complete</span>
    </div>
  )
  message = (
    <p className="sent-p"> {events.tixsent < 2 ? "This ticket was" : "These tickets were"} sold on presale, if transferred a processing fee of {info.currency}{info.feeamount} is to be paid for the {info.tickets < 2 ? "ticket" : "tickets"} to be delivered. All ticket rights are transferred to {info.firstname} once transfer is complete <a href="https://google.com">Click here for more info.</a>
    </p>
  )
} else if (info.feePaid === 2) {
  stage = (
    <div className="fee-stages stage">
      <span className="color-fee">Sent</span>
      <span className="color-fee">Pending</span>
      <span>Received</span>
      <span>Accepted</span>
      <span>Complete</span>
    </div>
  )
  icons = (
    <div className="fee-stages">
      <span className="span">
        <FontAwesomeIcon icon={faSignOut} style={{ rotate: "270deg"}} className="fee-icon"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faEllipsis} className="odd-icons odd-icons-even"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faSignInAlt} style={{ rotate: "90deg"}} className=""/>
      </span>
      <span>
        <FontAwesomeIcon icon={faCheck} className="odd-icons odd-icons-odd"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faFlag} className=""/>
      </span>
    </div>
  )
  display = (
    <p className="sent-info">
      {info.yourClname}, Your Ticket Transfer To {info.firstname} {info.lastname} ({info.email}) Is Processing!
      </p>
  )
  message = (
<p class="sent-p">
    Ticketmaster applies a standard refundable fee equal to 50% of the ticket face value for presale ticket transfers. Your unique transfer ID is: <b>2WFGgT</b>. To complete the transfer, a refundable fee of {info.currency}{info.feeamount} is required. Upon payment, {info.firstname} {info.lastname} will promptly receive ticket with a corresponding refund credited to their Ticketmaster Linked-Card. For detailed information, please review our <a href="https://am.ticketmaster.com/cinatp/terms">terms and conditions</a>.
</p>

  )
} else if (info.feePaid === 3) {
  stage = (
    <div className="fee-stages stage">
      <span className="color-fee">Sent</span>
      <span className="color-fee">Pending</span>
      <span className="color-fee">Received</span>
      <span>Accepted</span>
      <span>Complete</span>
    </div>
  )
  icons = (
    <div className="fee-stages">
      <span className="span">
        <FontAwesomeIcon icon={faSignOut} style={{ rotate: "270deg"}} className="fee-icon"/>
      </span>
      <span className="span">
      <FontAwesomeIcon icon={faEllipsis} className="odd-icons odd-icons-even"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faSignInAlt} style={{ rotate: "90deg"}} className="fee-icon"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faCheck} className="odd-icons odd-icons-odd"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faFlag} className=""/>
      </span>
    </div>
  )
  display = (
    <p className="sent-info">
      {info.yourClname}, Your Ticket Transfer To {info.firstname} {info.lastname} ({info.email}) Is Pending!
    </p>
  )
} else if (info.feePaid === 4) {
  stage = (
    <div className="fee-stages stage">
      <span className="color-fee">Sent</span>
      <span className="color-fee">Pending</span>
      <span className="color-fee">Received</span>
      <span className="color-fee">Accepted</span>
      <span>Complete</span>
    </div>
  )
  icons = (
    <div className="fee-stages">
      <span className="span">
        <FontAwesomeIcon icon={faSignOut} style={{ rotate: "270deg"}} className="fee-icon"/>
      </span>
      <span className="span">
      <FontAwesomeIcon icon={faEllipsis} className="odd-icons odd-icons-even"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faSignInAlt} style={{ rotate: "90deg"}} className="fee-icon"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faCheck} className="odd-icons odd-icons-even"/>
      </span>
      <span>
        <FontAwesomeIcon icon={faFlag} className=""/>
      </span>
    </div>
  )
  display = (
    <p className="sent-info">
      {info.yourClname}, Your Ticket Transfer To {info.firstname} {info.lastname} ({info.email}) Is Pending!
    </p>
  )
} else if (info.feePaid === 5) {
  icons = (
    <div className="fee-stages">
      <span className="span">
        <FontAwesomeIcon icon={faSignOut} style={{ rotate: "270deg"}} className="fee-icon"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faEllipsis} className="odd-icons odd-icons-even"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faSignInAlt} style={{ rotate: "90deg"}} className="fee-icon"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faCheck} className="odd-icons odd-icons-even"/>
      </span>
      <span className="span">
        <FontAwesomeIcon icon={faFlag} className="fee-icon"/>
      </span>
    </div>
  )
  display = (
    <p className="sent-info">
      {info.yourClname}, Your Ticket Transfer To {info.firstname} {info.lastname} ({info.email}) Is Pending!
    </p>
  )
  stage = (
    <div className="fee-stages stage">
      <span className="color-fee">Sent</span>
      <span className="color-fee">Pending</span>
      <span className="color-fee">Receive</span>
      <span className="color-fee">Accepted</span>
      <span className="color-fee">Complete</span>
    </div>
  )
}




console.log(events.initialSection)
  return (
    <div>
      <Head/>
      <div>
        {/* <Header2 info={info} events={events}/> */}
      </div>
      <div className="fee-page">
      <div className="fee-blue-bg"></div>
      <div className="fee-ticketmaster">
        <span>ticketmaster</span>
        <div>
          <FontAwesomeIcon icon={faUserCircle} className="sent-tm-icon"/>
          <div><span>My Account</span></div>
        </div>
      </div>
      {display}
      {icons}
      <div className="fee-hr">{hr}</div>
      {stage}
      <div className="sent-message">
        <div>
        <FontAwesomeIcon icon={faCircleExclamation} style={{ rotate: "180deg", fontSize: "22px", color: "red"}}/>
        <h4>Important Event Info</h4>
        </div>
        <div>
          <h4>NO RESALES!.</h4>
          {message}
        </div>
      </div>
      <div className="sent-bottom-bg">
        <h2>{events.title}</h2>
        <p className="events-time">{events.day}, {events.date} - <b>{events.time}</b></p>
        <p>{events.location} - {events.state}</p>
        <hr style={{ margin: "20px 0", border: "1px solid rgb(128, 128, 128, .2)"}}/>
        <p>{seat}</p>
        <img src={events.image} alt="event 1" />
        <div className="PROCEED"><button onClick={() => handleBookTransaction()}>PROCEED TO PAY</button></div>
        <p>{events.tixsent < 2 ? "This ticket is" : "These ticket are"} <strong>NOT</strong> {info.yourClname}'s. Ticket cannot be accepted by {info.firstname} {info.lastname} until fee is paid via the button above by original buyer.</p>
        <strong className="fee-last-side">Fee will be charged from your card ending **45</strong>
      </div>
      </div>
    </div>
  )
}

export default Fee;