import { faBars, faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Select, { components } from 'react-select';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const options = [
    { value: 'buyTickets', label: 'Buy Tickets', url: 'https://example.com/buy-tickets' },
    { value: 'myTickets', label: 'My Tickets', url: 'https://example.com/my-tickets' },
    { value: 'resale', label: 'Resale', url: 'https://example.com/resale' },
    { value: 'ticketDelivery', label: 'Ticket Delivery', url: 'https://example.com/ticket-delivery' },
    { value: 'transferDelivery', label: 'Transfer Tickets', url: 'https://example.com/transfer-tickets' }
  ];

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: menuIsOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "white", fontSize: "11px" }} />
        </motion.div>
      </components.DropdownIndicator>
    );
  };

  const handleSelectChange = (selectedOption) => {
    if (selectedOption && selectedOption.url) {
      window.location.href = selectedOption.url; // Redirect to the URL
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid rgba(255, 255, 255, 0.75)',
      borderRadius: '5px',
      padding: '0 5px',
      width: '100%',
      fontSize: '16px',
      background: "black",
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid rgba(255, 255, 255, 0.85)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgb(128, 128, 128, .1)' : 'white',
      color: state.isSelected ? 'black' : 'black',
      padding: '10px',
      cursor: 'pointer',
      '&:hover': {
        background: "rgb(128, 128, 128, .1)",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white',
      fontSize: "15px",
    }),
    menu: (provided) => ({
      ...provided,
      width: '100%',
      margin: '0 auto',
      border: '1px solid grey',
      fontSize: "14px",
    }),
    indicatorSeparator: () => ({
      display: "none"
    }),
  };

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 20px",
        background: "#0132F3",
        color: "white",
      }}>
        <div style={{ display: "flex" }}>
          <span style={{ fontStyle: "italic", WebkitTextStroke: "1px", fontSize: "25px" }}>ticketmaster</span>
          <p style={{ fontSize: "8px", transform: "translate(3.5px, 8px)" }}>®</p>
          <p style={{ margin: "10px 0 0 0", transform: "translateX(20px)", fontSize: "14px" }}>Help Center</p>
        </div>
        <div style={{ fontSize: "22px", display: "flex", gap: "10px", transform: "translateY(5px)" }}>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div style={{height: "auto", position: "relative"}}>
        <div style={{
          textAlign: 'left',
          background: "transparent",
          padding: "25px 0",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          color: "white",
          position: "relative",
          zIndex: 10
        }}>
          <div style={{ width: '90%', zIndex: 2 }}>
            <Select
              options={options}
              styles={customStyles}
              placeholder="Navigate to..."
              isSearchable={false}
              components={{ DropdownIndicator }}
              onChange={handleSelectChange} // Handle route redirection on change
              onMenuOpen={() => setMenuIsOpen(true)}
              onMenuClose={() => setMenuIsOpen(false)}
            />
          </div>
          <div style={{
            width: "90%",
            display: "grid",
            gap: "20px",
            margin: "25px 0 0 0",
            zIndex: 2
          }}>
            <p style={{ fontSize: "14.2px" }}>Ticketmaster Help <span style={{ margin: "0 5px" }}>></span> Contact Us</p>
            <p style={{ fontSize: "32px", fontWeight: "bold" }}>CONTACT US</p>
            <p style={{ WebkitTextStroke: ".4px", fontSize: "15.5px" }}>We're here to help. For any questions get in touch with us by email, chat or phone.</p>
          </div>
        </div>
        <div style={{position: "absolute", height: "100%", background: "black", top: "0", width: "100%", zIndex: 2, 
          clipPath: "polygon(0 100%, 110% 100%, 0 -10%)",}}>
            </div>
            <div style={{
                background: 
                "radial-gradient(circle, rgb(128, 128, 128, .05) .3px, rgb(128, 128, 128, .05) .3px), radial-gradient(circle, rgb(128, 128, 128, .05) .3px, black .5px)",
              backgroundSize: "4px 4px",
              backgroundPosition: "0 0, 3.5px 3.5px;",
              height: "100%",
              position: "absolute",
              top: "0",
              width: "100%",
              filter: "brightness(.10px)"
            }}>
            </div>
      </div>
    </div>
  );
};

export default Header;
