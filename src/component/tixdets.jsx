// page was written from random knowledge dont come for me
import React from "react";
import '../App.css'
import Dethead from "./dethead";


const Tixdet = ({ clinfo, info, close }) => {

let endseat;



const price = clinfo.price * info.numberOfSeats + 0.48;
let fee = (price / 12).toFixed(2); 
const total = (price + parseFloat(fee)).toFixed(2);

if (info.Generaladmission) {
    endseat = ""
    info.startingSeatNumber = "-"
} else if (info.numberOfSeats < 2) {
    endseat = ""
} else {
    endseat = `- ${info.startingSeatNumber + info.numberOfSeats -1}`
}

    return (
        <div>
            <Dethead handleCloseModal={close} info={info}/>
            <div className="tixdets-body">
                <div>
                    <h4>Seat Location</h4>
                    {info.Generaladmission ? (
                    <h4>GA{info.initialRow} <span style={{ marginLeft: "3rem", fontSize: "12px"}}>GENERAL ADMISSION</span></h4>
                    ) : (
                        <h4>{info.initialSection} / {info.initialRow} / {info.startingSeatNumber} {endseat}</h4>
                    )}
                </div>
                <hr />
                <div>
                    <h4>{info.title}</h4>
                    <h4>{info.day}, {info.time},  {info.date} • {info.location}</h4>
                </div>
                <hr />
                <div>
                    <h4>Entry Info</h4>
                    <h4>{info.entry}</h4>
                </div>
                <hr />
                <div>
                    <h4>Ticket Info</h4>
                    <h4 style={{marginBottom: "1px"}}>{clinfo.lineup1}</h4>
                    {clinfo.lineup2 ? (
                        <h4 style={{marginBottom: "3px"}}>{clinfo.lineup2}</h4>
                    ) : ""}  
                    <h4>{info.state}</h4>
                </div>
                <hr />
                <div>
                    <h4>Order Number</h4>
                    <h4>{clinfo.order}{clinfo.currency === "£" ? "/UK" : ""}</h4>
                </div>
                <hr />
                <div>
                    <h4>Ticket Type</h4>
                    <h4>{info.name}</h4>
                </div>
                <hr />
                <div>
                    <h4>Purchase Date</h4>
                    <h4>{clinfo.date}</h4>
                </div>
                <hr />
                <div>
                    <h4>Ticket Price</h4>
                    <h4>{info.name} <span>{clinfo.currency === "$" ? "US" : ""}{clinfo.currency}{price}</span></h4>
                    <h4>Fee <span>{clinfo.currency === "$" ? "US" : ""}{clinfo.currency}{fee}</span></h4>
                    <h4>GRAND TOTAL <span>{clinfo.currency === "$" ? "US" : ""}{clinfo.currency}{total}</span></h4>
                </div>
                <hr />
                <div>
                    <h4>Terms & Conditions</h4>
                    <h4>Take care of your tickets. They cannot be replaced in case of loss, theft, or damage. Your tickets are only valid for the event and seats specified on the ticket. This ticket is a revocable license allowing you to attend the event shown on the ticket. It is subject to the conditions outlined on the website www.ticketmaster.com.

This license can be revoked without the possibility of a refund in case of non-compliance with the defined conditions. Any sale or attempt of illegal sale is prohibited. Tickets from unauthorized sources could be invalid, lost, stolen, or counterfeit, and in</h4>
                    <div>
                    <input type="checkbox" name="check" id="check" />
                    <span> I agree to <a href="http://ticketmaster.com">Terms and Conditions</a>, Learn more about us <a href="http://ticketmaster.com">learn more</a></span>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Tixdet;