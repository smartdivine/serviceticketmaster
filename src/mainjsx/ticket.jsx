import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';
import Bottom from './bottom';
import ba3 from '../component images/wallet.jpg';
import Tixdet from '../component/tixdets';
import Display from './display';
import Barcode from '../component/barcode';
import Barcode2 from './barcode';
import '../carouselStyles.css'; 
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCheck } from '@fortawesome/free-solid-svg-icons';
import card_code from "./homeimg/barcode-code.jpg"

const CarouselComponent = ({ info, numberOfSeats, startingSeatNumber, taylor, hours, location, startcountdown, Generaladmission, sent, tixsent, clinfo }) => {
  const [showQRCodeModal, setShowQRCodeModal] = useState(false);
  const [countdownText, setCountdownText] = useState('');
  const [showFee,  setShowfee] = useState(false)
  const [showdet, setshowdets] = useState(false)
  const [countdownday, setCountdownday] = useState(''); 
  const [displayed] = useState(false)


  function displaydet() {
    setshowdets(!showdet)
  }

  function hidedet() {
    setshowdets(false)
  }




  function showfee() {
    setShowfee(!showFee)
  }

  function removefee() {
    setShowfee(false)
  }

  const seats = Array.from({ length: numberOfSeats }, (_, index) => {
    const seatInfo = {
      section: info.initialSection,
      row: info.initialRow,
      seat: (startingSeatNumber + index).toString(),
    };
  
    if (Generaladmission === true) {
      seatInfo.seat = "-";
      seatInfo.section = `GA${seatInfo.section}`
      seatInfo.row = `GA${seatInfo.row}`
    }
  
    return seatInfo;
  });
  



  useEffect(() => {
    const targetDate = new Date(startcountdown).getTime();
  
    const countdownInterval = setInterval(function () {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
  
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setCountdownText('Countdown expired!');
        return;
      }
  
      const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))).padStart(2, '0');
  
      // Use setCountdownday to update the state variable
      setCountdownday(days);
  
      const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
  
      setCountdownText(<div id='countdow'><span>{days}</span> <span>{hours}</span> <span>{minutes}</span> <span>{seconds}</span></div>);
    }, 1000);
  
    return () => clearInterval(countdownInterval);
  }, [startcountdown]);
  

  const handleViewBarcodeClick = () => {
    setShowQRCodeModal(true);
  };

  const handleCloseModal = () => {
    setShowQRCodeModal(false);
  };
  
  let sentCount = 0;





  return (
    <div className='slide-up-ticket-now'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        className="carousel-container custom-carousel"
        centerMode
        centerSlidePercentage={info.numberOfSeats === 2 ? 92 : 88}
      >

{seats.map((seatInfo, index) => {
  const { section, row, seat } = seatInfo;
  const isSent = index < tixsent;

  const styles = {
    cardHolder: {
      height: "41rem",
      width: "21rem",
      margin: "3.2rem 0 -55px 0",
      display: "inline-block",
      verticalAlign: "top",
      boxSizing: "border-box",
      ...(index === 0 && { marginLeft: info.numberOfSeats === 2 ? "2rem" : "2.75rem" }), 
      ...(index === seats.length - 1 && { marginRight: "2.75rem" }), 
    },
  };

  return (
    <div className={`card-holder ${index === 0 ? 'first-card' : index === seats.length - 1 ? 'last-card' : ''}`} key={index} style={styles.cardHolder}>
      <div className={isSent ? "event-sold" : "event-sellers"}>
        <p>{info.name}</p>
      </div>
      <div>
        {info.ga ? (
          <div className={isSent ? "seat-det-sent seat-dets" : "seat-dets ga"}>
            <div>
              <p>SEC</p>
              <p>{section}</p>
            </div>
            <p>GENERAL ADMISSION</p>
          </div>
        ) : (
          <div className={isSent ? "seat-det-sent seat-dets" : "seat-dets"}>
            <p>SEC</p>
            <p>ROW</p>
            <p>SEAT</p>
            <p>{section}</p>
            <p>{row}</p>
            <p>{seat}</p>
          </div>
        )}
      </div>
      <img src={taylor} alt="Images 1" className='card-img'/>
      <div className={isSent ? "info-sent" : "info-field"}>
        {isSent && <div className='right-sent'><FontAwesomeIcon icon={faArrowRightLong}/></div>}
        <p className='title-sent'>{info.title}</p>
        <p className='sent-time'>{info.day}, {info.date}, {info.time} • {location}</p>
        {isSent && <div className='sent-span'><span>Sent</span></div>}
      </div>
      <hr className='smthr smthr1' style={{border: "0.5px solid rgb(128,128,128,0.3)", boxShadow: "0px 0px 2px rgb(128,128,128,0.5)"}}/>
      <hr className='smthr smthr2' style={{border: "0.5px solid rgb(128,128,128,0.3)", boxShadow: "0px 0px 2px rgb(128,128,128,0.5)"}}/>
      {isSent ? (
        info.sentfee === false ? (
          <div className='sent-sent'>
            <p>{tixsent} {tixsent === 1 ? "ticket" : "tickets"} sent to</p>
            <p>{clinfo.firstname} {clinfo.lastname}</p>
            <p>Waiting for recipient to claim</p>
            <p>Order: Awaiting Payment</p>
            <button style={{ textDecoration: "none"}} onClick={() => window.location.href = clinfo.redirectpage}>{info.cancel ? "Cancel":"View Status"}</button>
          </div>
        ) : ( 
          <div className='sent-sent sent-sent2'>
            <p>{tixsent} {tixsent === 1 ? "ticket" : "tickets"} sent to</p>
            <p>{clinfo.firstname} {clinfo.lastname} | Order {clinfo.order}</p>
            <p>A TicketSure Fee of <strong>{info.currency}{info.price}</strong> was imposed</p>
            <p>Additional fee applied due to delayed payment.</p>
            <div className='click-here'>
              <p>Click Here to Proceed </p>
              <p onClick={() => showfee()} >PAY</p>
            </div>
          </div>
        )
      ) : (
        <div>
          <p className='entry'>{info.countdown === false ? info.entry : (
            <div className='tickett'>
              <p>Ticket will be ready in:</p>
            </div>
          )}</p>
          <div className='walletimg'>
            {info.countdown === false ? (
              info.barcode === false ? (
                <img src={ba3} alt="ba3" />
              ) : (
                <div className='body-barcode-card'>
                  <div className='card-code'>
                  <img src={card_code} alt=""/>
                  </div>
                  <h5>View in Wallet</h5>
                </div>
              )
            ) : (
              <div>
                <div id="countdown">{countdownText}</div>
                <div className={countdownday > 100 ? 'days-width' : 'days'}>
                  <span>DAY</span>
                  <span>HOUR</span>
                  <span>MIN</span>
                  <span>SEC</span>
                </div>
              </div>
            )}
          </div>
          <div className='section0'>
            {info.countdown === false ? (
              <div className='sections'>
                <h5 onClick={() => handleViewBarcodeClick()} style={{ cursor: 'pointer', textAlign: 'center'}}>View Barcode</h5>
                <h5 onClick={displaydet}>Ticket Details</h5>
              </div>
            ) : (
              <h5 className='dets' onClick={displaydet}>Ticket Details</h5>
            )}
          </div>
        </div>
      )}
      <div className={isSent ? "bottom-sent" : "bottom"}></div>
    </div>
  );
})}



      </Carousel>
      {seats.length > 0 && (
        <Bottom
          section={info.initialSection}
          row={info.initialRow}
          seat={seats[0].seat}
          numberOfSeats={numberOfSeats}
          location={location}
          info={info}
          Generaladmission={Generaladmission}
          sent={sent}
          tixsent={tixsent}
          clinfo={clinfo}
          sentCount={sentCount}
        />
      )}
      {showQRCodeModal && <Barcode info={info} handleCloseModal={handleCloseModal}/>}
      {showFee && <Display removefee={removefee} hours={hours} info={info} clinfo={clinfo}/>}
      {showdet && <Tixdet close={hidedet} info={info} clinfo={clinfo}/>}
      {displayed && <Barcode2 info={info}/>}
    </div>
  );
};

export default CarouselComponent;
