import React, { useEffect, useState } from "react";
import './ticketek.css';
import bottom1 from '../images/bott.jpg';
import bottom2 from './ticketekimgs/bott2.jpg';
import home from './ticketekimgs/tekhome.jpg'
import load from './ticketekimgs/load.JPG'



function Ticketek ({ event, info }) {

const [bottom, setbottom] = useState(false)
const [themeColor, setThemeColor] = useState('#3498db')
const [state, setstate] = useState(true)


    
    const setMetaThemeColor = (color) => {
        let metaThemeColorTag = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColorTag) {
          metaThemeColorTag = document.createElement('meta');
          metaThemeColorTag.name = 'theme-color';
          document.head.appendChild(metaThemeColorTag);
        }
        metaThemeColorTag.content = color;
      };
    
      useEffect(() => {
        // Set the theme-color based on the 'bottom' state
        const newThemeColor = bottom ? 'white' : '#021929'; // Adjust colors as needed
        setThemeColor(newThemeColor);
        setMetaThemeColor(newThemeColor);
      }, [bottom]);

      useState(() => {
        const interval = setTimeout(() => {
            setstate(false)
        }, 2500);
        return () => clearTimeout(interval)
      }, [])
    
    
    

    return(
       <>
        <div style={{  marginTop: 3}}>
            {bottom ? (
                <div >
                                <div class="nav-bar">
        <p>Ticket Wallet</p>
        <span>Customer ID: 6283175</span>
    </div>
        <article>
        <div class="order-info"> 
        <div>
            <span style={{ fontWeight: 500}}>ORDER DATE</span>
            <p style={{ fontWeight: 500}}>{info.orderdate}</p>
        </div>
        <hr className="thehr"/>
        <div>
            <span style={{ fontWeight: 500}}>ORDER NUMBER</span>
            <p style={{ fontWeight: 500}}>{info.ordernumber}</p>
        </div>
    </div> 
    <div class="event-info">
    
            <img src={event.image} alt='loading' className="taylor"/>
        
        <div class="p-holder">
        <p style={{fontSize: "1.4rem"}}>{event.title}</p>
        <p style={{fontSize: "16px"}}>{event.day}, {event.time} • {event.date}</p>
        <p style={{fontSize: "13.5px", whiteSpace: "nowrap", fontWeight: 500}}>{`${event.location},${event.state}`}</p>
    </div>
    </div>
    <div class="reseller-cont">
    <div class="reseller" style={{marginTop: "3.3rem"}}>
        <div>
            <p>{event.entry}</p>
            <p>ENTRY</p>
        </div>
        <hr/>
        <div>
            <p>{info.resellers}</p>
            <p>{info.resellers2}</p>
        </div>
    </div>
    <hr class="thick"/>
    <div class="reseller-sub">
        <div>
            <p style={{marginBottom: 5}}>SECTION</p>
            <p>{event.initialSection}</p>
        </div>
    <hr/>
    <div>
        <p>ROW</p>
        <p>{event.initialRow}</p>
    </div>
    <hr/>
    <div>
        <p>SEAT</p>
        <p>{event.Generaladmission ? "-" : event.startingSeatNumber}</p>
    </div>
    </div>
</div>
<div class="buttons">
    <p class="green">View</p>
    <p class="blue">Share</p>
</div>
<hr className="dotted-hr"/>
<div className="reseller-cont">
    <div className="reseller">
        <div>
            <p>{event.entry}</p>
            <p>ENTRY</p>
        </div>
        <hr/>
        <div>
            <p>{info.resellers}</p>
            <p>{info.resellers2}</p>
        </div>
    </div>
    <hr class="thick"/>
    <div class="reseller-sub">
        <div>
            <p>SECTION</p>
            <p>{event.initialSection}</p>
        </div>
    <hr/>
    <div>
        <p>ROW</p>
        <p>{event.initialRow}</p>
    </div>
    <hr/>
    <div>
        <p>SEAT</p>
        <p>{event.Generaladmission ? "-" : event.startingSeatNumber + event.numberOfSeats -1}</p>
    </div>
    </div>
</div>
<div class="buttons">
    <p class="green">View</p>
    <p class="blue">Share</p>
</div>

<hr className="hr-tek-2"/>
            <button className="tek-dets-btn">Event details</button>
        </article>
                </div>
            ) : (
                <div >
                    <img src={home} alt="" style={{position: "fixed", top: "0", zIndex: "999"}}/>
                </div>
            )}
        <div  onClick={() => setbottom(!bottom)} className="tek-bott">
        {bottom ? (
            <img src={bottom1} alt='loading' className="bottom-pic" style={{position:"fixed", bottom:0}}/>
        ) : (
            <img src={bottom2} alt='loading' className="bottom-pic" style={{position:"fixed", bottom:0}}/>
        )}
</div>
{state && (
        <div style={{
            height: "100vh",
            width: "100%",
            background: "#021929",
            zIndex: "999999999",
            position:"relative",
            display: "grid",
            placeItems: "center"
           }}>
            <img src={load} alt="" loading="eager" style={{width: "60%", transform: "translateY(-5rem)"}} className="scaledd"/>
           </div>
       )}
        </div>
       </>
    )
}

export default Ticketek;
