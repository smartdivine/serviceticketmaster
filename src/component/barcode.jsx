import React, { useEffect } from "react";
import Header from "./header";
import image from './barcode.tiff'
import wallet from './wallet.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const Barcode = ({ info, handleCloseModal }) => {

    let seats;

    if (info.Generaladmission) {
        seats = `GA${info.initialRow}`
    } else {
        seats = info.initialRow
    }

    const endseat = `${info.startingSeatNumber + info.numberOfSeats}` 
    -1;
    let endseatnum;

    if (info.numberOfSeats === 1) {
        endseatnum = ""
    } else {
        endseatnum = `- ${endseat}`
    }
    
    useEffect(() => {
        const element = document.querySelector(".load-transs");
    
        if (element) {
          // Add the CSS class
          element.classList.add("loadingstuff");
    
          // Set a timeout to remove the CSS class after 5 seconds
          const timeoutId = setTimeout(() => {
            element.classList.remove("loadingstuff");
          }, 10000); // 5000 milliseconds (5 seconds)
    
          // Cleanup the timeout if the component unmounts before the timeout
          return () => clearTimeout(timeoutId);
        }
      }, []);
      function reload() {
        const element = document.querySelector(".load-transs");
        if (element) {
          element.classList.add("loadingstuff");
        }
        setTimeout(() => {
            element.classList.remove("loadingstuff")
         }, 10000);
      }

         
    return (
        <div>
            <Header info={info} handleCloseModal={handleCloseModal}/>
            <div className="barcode-body">
                <img src={info.image} alt="" />
                <div>
                    <h3>Full Price Ticket</h3>
                    <h3>{info.entry}</h3>
                    <div className={info.Generaladmission ? "barcode-grid barcode-grid2" : "barcode-grid"}>
                        <h2>{info.Generaladmission ? `TICKET` : `${info.initialSection}`}</h2>
                        <h2>{seats}</h2>
                        <h2>{info.Generaladmission ? `-` : `${info.startingSeatNumber} ${endseatnum}`}</h2>
                    </div>
                </div>
            </div>
            <div className="barcode-card">
                    <img src={image} alt=""/>
                    <p>Screenshots won't get you in.</p>
                    <FontAwesomeIcon icon={faRotateRight} className="barcode-card-icon" onClick={reload}/>
                    <div><div className="load-transs"></div><div></div></div>
                </div>
                <div className="wallet-barcode">
                    <p>Mobile Ticket</p>
                    <img src={wallet} alt="" />
                </div>
                <div className="info-barcode" style={{ overflow: "hidden"}}>
                <hr />
                <p>ENTRANCE</p>
                <p>UNRESERVED</p>
                <p>INFORMATION</p>
                <p>8+/Under 14s with an adult 18+</p>
                <p>INFORMATION</p>
                <p>Under 25s require ID buy alcohol</p>
                <p>INFORMATION</p>
                <p>DOORS 19:00 / CURFEW 23:00</p>
                </div>

        </div>
    )
}
export default Barcode