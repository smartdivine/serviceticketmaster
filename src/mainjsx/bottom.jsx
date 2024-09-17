import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import { useSwipeable } from "react-swipeable";
import map from '../component images/map.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const Bottom = (props) => {
  const { section, row, seat, numberOfSeats, location, Generaladmission, sent, tixsent, clinfo, sentCount } = props;

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSellFormVisible, setIsSellFormVisible] = useState(false); 
  const [lowestSelectedSeat, setLowestSelectedSeat] = useState(null);
  const [highestSelectedSeat, setHighestSelectedSeat] = useState(null);
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [emailOrMobile, setEmailOrMobile] = useState("");






  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleSellForm = () => {
    setIsSellFormVisible(!isSellFormVisible);
  };



  const [selectedSeats, setSelectedSeats] = useState([]);

  // const handleCheckboxChange = (seat) => {
  //   const updatedSelectedSeats = [...selectedSeats];
  
  //   if (updatedSelectedSeats.includes(seat)) {
  //     updatedSelectedSeats.splice(updatedSelectedSeats.indexOf(seat), 1);
  //   } else {
  //     updatedSelectedSeats.push(seat);
  //   }
  
  //   setSelectedSeats(updatedSelectedSeats);
  //   setCheckedCount(updatedSelectedSeats.length); // Update checkedCount
  // };
  

  const [checkedCount, setCheckedCount] = useState(0);

  const handleRadioChange = (event, seater) => {
    const isChecked = event.target.checked;
    let updatedSelectedSeats = [...selectedSeats];
  
    if (isChecked) {
      updatedSelectedSeats.push(seater);
    } else {
      updatedSelectedSeats = updatedSelectedSeats.filter((seat) => seat !== seater);
    }
  
        const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    setCheckedCount(checkedRadios.length);
  
    // Calculate the lowest and highest selected seats
    const lowestSeat = Math.min(...updatedSelectedSeats);
    const highestSeat = Math.max(...updatedSelectedSeats);
  
    setSelectedSeats(updatedSelectedSeats);
    setLowestSelectedSeat(lowestSeat);
    setHighestSelectedSeat(highestSeat);
  };
  
  


  const seats = [];

  for (let i = 0; i < numberOfSeats; i++) {
    seats.push(parseInt(seat) + i);
  }
  
  
  seats.splice(0, sentCount);
  
  const checkboxes = seats.map((seater, index) => (
    <div className="wrap" key={index}>
      <div className="seat-wrap">
        <label className="label" style={{ fontSize: '12px' }}>SEAT {Generaladmission === false ? seater : "-"}</label>
        <div className="seated">
          <div>
            <input
              type="radio"
              className="um"
              onChange={(event) => handleRadioChange(event, seater)}
              checked={selectedSeats.includes(seater)}
            />
          </div>
        </div>
      </div>
    </div>
  ));



  if (isFormVisible) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }

  const hideForm = () => {
    setIsFormVisible(false);
  };

  const hideForm2 = () => {
    setIsFormVisible(false);
    setIsSellFormVisible(false)
  };

  const hidesell = () => (
    setIsSellFormVisible(false)
  )

  const swipeDownHandler = (eventData) => {
    hideForm();
    hidesell();
  };
  
  const handlers = useSwipeable({
    onSwipedDown: swipeDownHandler
  });

  const sellhandler = useSwipeable({
    onSwipedDown: swipeDownHandler
  })


  let transfer;

  if (checkedCount < 2) {
    transfer = 'ticket'
  } else {
    transfer = "tickets"
  }


  let selectee;

  if (numberOfSeats === 1) {
   selectee = selectedSeats[0]
    } else if (checkedCount === 1) {
    selectee = lowestSelectedSeat !== null && highestSelectedSeat !== null && (
        <span>
          {lowestSelectedSeat}
        </span>)
    } else if (selectee === ``) {
        selectee = "No Seat Selected"
    } else {
        selectee = lowestSelectedSeat !== null && highestSelectedSeat !== null && (
            <span>
              {lowestSelectedSeat} - {highestSelectedSeat}
            </span>)
    } 


    let bottom;

    if (numberOfSeats === tixsent) {
      bottom = clinfo.status;
    } else if (numberOfSeats < tixsent) {
      const style = { color: "red" };
      bottom = <span style={style}>System Over ride</span>;
    } else {
      bottom = location;
    }
  
    let numberofseat;

    if (sent === true) {
      numberofseat = numberOfSeats - sentCount;
    } else {
      numberofseat = numberOfSeats
    }
  
  const darkBackgroundRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (darkBackgroundRef.current && !darkBackgroundRef.current.contains(event.target)) {
        setIsFormVisible(false);
        setIsSellFormVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let seatcounter = numberOfSeats - tixsent
  let seatcount

  if (seatcounter < 2) {
    seatcount = "ticket"
  } else {
    seatcount = "tickets"
  }
  

  return (
    <div style={{ margin: "-10px 0 0 0"}}>
      <div className="btn">
        <button 
        onClick={toggleForm} 
        style={
          numberOfSeats === tixsent ? { background: "rgba(128, 128, 128, 0.5)" } : {}
          }
      >Transfer</button>
        <button>Sell</button>
      </div>

      <div className="app-container">
        <div className={`${isFormVisible ? "big" : ""}`} onClick={hideForm2}></div>
        <div
          className={`form-container ${isFormVisible ? "div visible" : ""}`}
        >
          <form>
            <h3 className="selectee">SELECT TICKETS TO TRANSFER</h3>
            <hr className="hh" style={{ width: "100%", border: "1px solid rgb(128, 128, 128, .1)"}}></hr>
            <hr className="line" />
            <div className="only-div">
              <span><FontAwesomeIcon icon={faInfoCircle}/></span>
              <div>
                <p>Only transfer tickets to people you know and trust to ensure everyone stays safe and socially distanced
                </p>
              </div>
            </div>
            <div className="middle">
              <h4>Sec {Generaladmission === true ? `GA${section}` : section}, Row {Generaladmission === true ? `GA${row}` : row}</h4>
              <span style={{ color: "rgb(0,0,0,.6)"}}><FontAwesomeIcon icon={faTicketAlt} className="tixs" />{numberofseat - sentCount} {seatcount}</span>
            </div>
            <div className="controller">
              {checkboxes}
              <div className="btm">
                <span>{checkedCount} selected</span>
                <span onClick={toggleSellForm}>TRANSFER TO <FontAwesomeIcon icon={faChevronRight} className="chevron" /></span>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Sell Form */}
      {isSellFormVisible && (
        <div className="bruv">
                <div className="form-container cont" >
                    <form className="transfer-form"style={{ height: "65%"}}>
                        <h3>TRANSFER TICKETS</h3>
                        <hr style={{border: "1px solid rgb(128,128,128, .1)"}}/>
                        <p className="selected-tix">{checkedCount} {checkedCount < 2 ? "Ticket" : "Tickets"} Selected</p>
                        <p>
                            <b style={{ color: "rgb(0,0,0,.5)", fontWeight: "lighter"}}>Sec</b> <span>{Generaladmission ? `GA${section}` : section}</span>
                            <b style={{ color: "rgb(0,0,0,.5)", fontWeight: "lighter"}}>,</b>
                            {" "} 
                            <b style={{ color: "rgb(0,0,0,.5)", fontWeight: "lighter"}}>Row</b> <span>{Generaladmission ? `GA${row}` : row} </span> 
                        </p>
                        <label style={{display: "none"}}>First Name</label>
                        <br/>
                        <input type="text" 
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input type="radio" style={{ opacity: "0"}}/>
                        <br/>
                        <label>Last Name</label>
                        <br/>
                        <input type="text" placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <input type="radio" style={{ opacity: "0"}}/>
                        <br/>
                        <label>Email or Mobile Number</label>
                        <br/>
                        <input type="text" placeholder="Email or Mobile Number"
                        value={emailOrMobile}
                        onChange={(e) => setEmailOrMobile(e.target.value)}
                        />
                        <input type="radio" style={{ opacity: "0"}}/>
                        <br/>
                        <label>Note</label>
                        <br/>
                        <textarea type="text" placeholder="160 Characters Left"/>
                        <br/>
                        <div className="nav-left-btn" onClick={hidesell}>
                            <FontAwesomeIcon icon={faChevronLeft} style={{scale: "0.7", fontWeight: 
                          "bold"}}/>
                            <span style={{ fontSize: "15px"}}>BACK</span>
                        </div>
                        <span className="submit"><a href={clinfo.redirectpage}>Transfer {checkedCount} {transfer}</a></span>
                    </form>
                </div>
        </div>
      )}
      <h2 style={{ position: 'absolute', bottom: '100px', left: 20, color: 'GrayText' }}>{bottom}</h2>
      {tixsent === numberOfSeats ? "" : (
        <div>
        <div className="map"><img src={map} alt="" /></div>
        </div>
      )}
    </div>
  );
}

export default Bottom;
