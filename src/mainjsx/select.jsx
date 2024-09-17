import React, { useState, useRef, useEffect } from "react";
import "../App.css"; 
import { useSwipeable } from "react-swipeable";
// import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTicketAlt } from "@fortawesome/free-solid-svg-icons";




const App = () => {


    const statment = false
  const [isFormVisible, setIsFormVisible] = useState(statment);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };


  const [isChecked, setIsChecked] = useState(false);

//   const toggleCheckbox = () => {
//     setIsChecked(!isChecked);
//   };

  const events = {
    tix: 4,
    seat: 16,
    section: 101,
    row: "200"
  };

  const seats = [];

  for (let i = 0; i < events.tix; i++) {
    seats.push(events.seat + i);
  }

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleCheckboxChange = (seat) => {
    // Clone the current selectedSeats array to avoid mutating state directly
    const updatedSelectedSeats = [...selectedSeats];

    // Check if the seat is already selected
    if (updatedSelectedSeats.includes(seat)) {
      // If selected, remove it from the selected seats
      updatedSelectedSeats.splice(updatedSelectedSeats.indexOf(seat), 1);
    } else {
      // If not selected, add it to the selected seats
      updatedSelectedSeats.push(seat);
    }

    // Update the state with the updated selected seats
    setSelectedSeats(updatedSelectedSeats);
  };

  const [checkedCount, setCheckedCount] = useState(0);

  const handleRadioChange = () => {
    // Count the number of checked radio inputs
    const checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    setCheckedCount(checkedRadios.length);
  };

  const checkboxes = seats.map((seat, index) => (
    <div className="wrap" key={index}>
      <div className="seat-wrap">
        <label className="label" style={{ fontSize: '12px' }}>SEAT {seat}</label>
        <div className="seated">
          <div>
          <input type="radio" className="um" onChange={handleRadioChange} />
          </div>
        </div>
      </div>
    </div>
  ));

  const hideForm = () => {
    setIsFormVisible(false);
  };

  const handlers = useSwipeable({
    onSwipedDown: hideForm,
  });


  const darkBackgroundRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (darkBackgroundRef.current && !darkBackgroundRef.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    };

    <div>Selected Seats: {selectedSeats.join(", ")}</div>

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="btn">
                <button onClick={toggleForm}>Transfer</button>
                <button>Sell</button>
            </div>
        <div className={`${isFormVisible ? "big" : ""}`} onClick={hideForm}></div>
      <div
        className={`form-container ${isFormVisible ? "div visible" : ""}`}
      >
        <form {...handlers}>
        <h4 className="selectee">SELECT TICKETS TO TRANSFER</h4>
        <hr className="hh"></hr>
      <hr className="line"/>
      <div className="middle">
        <h4>Sec {events.section}, Row {events.row}</h4>
        <span><FontAwesomeIcon icon={faTicketAlt} className="tixs"/>{events.tix} tickets</span>
      </div>
        <div className="controller">
      {checkboxes}
      <div className="btm">
      <span>{checkedCount} selected</span>
      <span>TRANSFER TO <FontAwesomeIcon icon={faChevronRight} className="chevron"/></span>
      </div>
    </div>
        </form>
      </div>
    </div>
  );
};

export default App;
