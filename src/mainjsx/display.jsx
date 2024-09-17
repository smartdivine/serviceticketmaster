import React, { useState, useEffect } from "react";

const Countdown = ({ info }) => {
  const initialTotalSeconds = info * 60; // Assuming info is the number of minutes
  const [totalSeconds, setTotalSeconds] = useState(initialTotalSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTotalSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);

  }, [initialTotalSeconds]);

  const displayTime = () => {
    const displayMinutes = Math.floor(totalSeconds / 60);
    const displaySeconds = totalSeconds % 60;
    return `${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
  };

  return <p className="countdown-fee">Session Ends In <span className="times"> {displayTime()}</span></p>;
};

const Display = ({ info, removefee, clinfo }) => {
  return (
    <div className="btn-fee-bg">
      <div>
        <p>Click <strong>"CONFIRM"</strong> to Continue</p>
        <p>{clinfo.currency}{clinfo.feeamount} x {info.tixsent} {info.tixsent === 1 ? "Ticket" : "Tickets"}</p>
        <p>Total: <strong>{clinfo.currency}{clinfo.feeamount * info.tixsent}</strong></p>
        <Countdown info={clinfo.hour} className="time-nth" />
        <p>FEE IS REFUNDABLE</p>
        <a href="http://ticketmaster.com">Learn more</a>
        <button>CONFIRM</button>
        <button onClick={removefee}>CANCEL</button>
      </div>
    </div>
  );
};

export default Display;
