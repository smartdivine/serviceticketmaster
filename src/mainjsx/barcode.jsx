import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Barcode2 = ({ close, info }) => {


    return (
        <div className="wallet-barcode-card">
            <div className="wallet-barcode-card-nav">
                <h3>Done</h3>
                <h3><FontAwesomeIcon icon={faEllipsis} /></h3>
            </div>
            <div  className="wallet-barcode-card-nav-two">
                <div className="wallet-barcode-card-nav-two-tm">
                    <span >ticketmaster</span>
                    <div>
                        <span>{info.barinfo.time}</span>
                        <span>{info.barinfo.date}</span>
                    </div>
                </div>
                <div className="wallet-barcode-card-nav-two-img">
                    <span>t</span>
                </div>
                <div className="wallet-barcode-card-nav-two-venue">
                    <span>TICKETMASTER VENUE</span>
                    <span>{info.location}</span>
                </div>
                <div className="wallet-barcode-card-nav-two-grid">
                    <div>
                        <span>SECTION</span>
                        <span>{info.Generaladmission ? "GA" : ""}{info.initialSection}</span>
                    </div>
                    <div>
                        <span>ROW</span>
                        <span>{info.Generaladmission ? "GA" : ""}{info.initialRow}</span>
                    </div>
                    <div>
                        <span>SEAT</span>
                        <span>{info.Generaladmission === false ? (
                            info.numberOfSeats < 2 ? `${info.startingSeatNumber}` : `${info.startingSeatNumber} - ${info.startingSeatNumber + info.numberOfSeats -1}`
                        ) : (
                            '-'
                        )}</span>
                    </div>
                </div>

                <div className="wallet-entry-info">
                        <span>ENTRY INFO</span>
                        <span style={{ textTransform: "capitalize"}}>{info.entry}</span>
                    </div>
            </div>
        </div>
    );
}

export default Barcode2;
