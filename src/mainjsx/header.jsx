import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = ({ onCloseTicket, numberOfSeats }) => {
  return (
    <nav className="navbar-grid">
      <div className="nav-left" onClick={onCloseTicket}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="nav-center">{numberOfSeats === 1 ? (
        <h3>My Ticket</h3>
      ) : (
        <h3>My Tickets</h3>
      )}</div>
      <div className="nav-right"><a href='http://google.com'>Help</a></div>
    </nav>
  );
};

export default Header;
