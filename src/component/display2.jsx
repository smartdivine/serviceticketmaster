import React from "react";
import '../App.css'



function Dtwo({info,events,hide}) {



    return (
        <div className="Dtwo-div">
            <div>
            <p>{events.tixsent} {events.tixsent > 1 ? "Tickets" : "Ticket"} x <b>{info.currency}{info.feeamount * events.tixsent}</b></p>
            <strong>Ticket Insurance: $51.35</strong>
            <p style={{ transform: "transformY(-10px)", marginBottom: "10px"}}>Click On Pay To Continue</p>
            <button>Pay</button><button onClick={hide}>Cancel</button>
            </div>
        </div>
    )
}

export default Dtwo
