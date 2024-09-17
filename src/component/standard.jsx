import React, { useState } from "react";
import Standerheader from "./standardhead";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faQuestionCircle, faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import covers from '../images/covers.jpg'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Standard = ({ info, event }) => {
    const handleBookTransaction = () => {
        confirmAlert({
            title: <p>Click <b>"Yes"</b> to proceed</p>,
            message: (
                <b>
                    {state ? "Refund NOT protected" : "Your Refund Claim is protected"}
                </b>
            ),
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        setstate(true)
                        setTimeout(() => {
                            setstate(false)
                        }, 5000);
                    },
                },
                {
                    label: "No",
                    onClick: () => console.log("User clicked 'No'"),
                },
            ],
        });
    };

    const [state, setstate] = useState(true);
    const [hm, sethm] = useState(false);
    const [check, setcheck] = useState(false);

    return (
        <div style={{ overflow: "hidden"}}>
            <Standerheader events={event} info={info}/>
            <div style={{ margin: "6rem auto 0 auto", width: "25rem"}}>
                <h3 style={{ display: "flex", alignItems: "center", gap: 10, margin: "20px 0 30px 0"}}>
                    <span>
                        Refund Claim
                    </span>
                    <FontAwesomeIcon icon={faCheck} style={{ border: "2px solid green", borderRadius: "50%", padding: "5px", color: "green"}}/>
                </h3>
                <div>
                    <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "20px", fontFamily: "sans-serif"}}>
                        Get reimbursed up to 100% of your refund, including taxes and fees or other event-related items in your order with Event Ticket Insurance.
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: "bold",  fontFamily: "sans-serif"}}>
                        <b>{info.firstname},</b>{" "}
                        Protect your tickets if you can't attend your event for covered reasons like
                    </p>
                    <img src={covers} alt="cover" />
                    <p style={{ width: "90%", margin: "0 auto 25px auto"}}>
                        Also, receive 24/7 assistance that can find parking, make restaurant reservations, and more.
                    </p>
                    <div onClick={() => setstate(!state)} className="choice">
                        <FontAwesomeIcon icon={state ? faCircle : faCheck} className="circlelee" style={state ? {color: "white"} : {}}/>
                        <span>
                            {state ? (
                                <p>
                                    <b>
                                    Yes, proctect my refund claim{" "}
                                    </b>
                                        for only {info.currency}{(info.feeamount / event.numberOfSeats).toFixed(2)} per ticket ({`${info.currency}${(info.feeamount / event.numberOfSeats * event.tixsent).toFixed(2)} total`}).
                                        (Highly Recommended)
                                </p>
                            ) : <b style={{color: "green"}}>Great choice! Your Refund Claim is protected.</b>}
                        </span>
                    </div>
                </div>
            </div>
            <hr style={{margin: "20px 0", border: "1px solid rgb(128,128,128,.3"}}/>
            <div style={{width: "25rem" ,margin: "0 auto"}}>
                <p style={{display: "flex"}}>
                    <p style={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
                        <span>
                            <b style={{fontSize: "20px"}}>Taxes{" "}</b>
                        <span style={{fontSize:"10px"}}>(Incl. {info.currency}{event.numberOfSeats.toFixed(2)} tax)</span></span>
                    <span>
                        {info.currency}{info.feeamount}
                    <FontAwesomeIcon icon={hm === false ? faChevronCircleUp : faChevronCircleDown} style={{color: "green", fontSize: "1.5rem", marginLeft: 10, transform: "translateY(2px)"}} onClick={() => sethm(!hm)}/>
                    </span>
                    </p>
                </p>
                {hm && (
                    <>
                    <p>
                        <p style={{ marginTop: 18, WebkitTextStroke: .2, letterSpacing: ".03em"}}>Tickets</p>
                        <p style={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: 9}}>
                            <span style={{fontWeight: "bold", fontSize: "13px", color: "rgb(0,0,0,.7)"}}>
                            {event.name}: {info.currency}{(info.price).toFixed(2)} x {event.tixsent}{" "}<FontAwesomeIcon icon={faQuestionCircle}/>
                            </span>
                            <span>
                            {info.currency}{(info.price * event.tixsent).toFixed(2)}
                            </span>
                    </p>
                </p>
                <p>
                        <p style={{ marginTop: 18, WebkitTextStroke: .2, letterSpacing: ".03em"}}>Fees</p>
                        <p style={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: 9}}>
                            <span style={{fontWeight: "bold", fontSize: "13px", color: "rgb(0,0,0,.7)"}}>
                            Service Fee: {info.currency}{(info.servicefee * event.tixsent).toFixed(2)} x {event.tixsent}{" "}<FontAwesomeIcon icon={faQuestionCircle}/>
                            </span>
                            <span>
                            {info.currency}{(info.servicefee * event.tixsent).toFixed(2)}
                            </span></p>
                            <p style={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: 4}}>
                            <span style={{fontWeight: "bold", fontSize: "13px", color: "rgb(0,0,0,.7)"}}>
                            Order Processing Fee{" "}<FontAwesomeIcon icon={faQuestionCircle}/>
                            </span>
                            <span>
                            {info.currency}{event.tixsent}.32
                            </span></p>
                </p>
                <p>
                        <p style={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: 30}}>
                        <p style={{ WebkitTextStroke: .2, letterSpacing: ".03em"}}>Total Refund</p>
                            {info.currency}
                            {info.total}
                            </p>
                </p>
                    </>
                )}
                <p style={{ fontWeight: "bold", fontSize: "12px",margin: "20px 0", color: "rgb(0,0,0,.6)"}}>
                    *Refund and Exchanges Final
                </p>
                <p style={{ fontWeight: "bold", fontSize: "13px", color: "rgb(0,0,0,.6)"}}>
                    <input type="checkbox" onChange={()=> setcheck(!check)}/>{" "}
                    <span>I have read and agree to the current <a style={{textDecoration: "none"}} href="https://help.ticketmaster.com/hc/en-us/articles/10468830739345-Terms-of-Use">Terms of Use.</a></span>
                </p>
                <button style={check === false ? {width: "100%", height: "3rem", background: "grey", border:"none", borderRadius: "5px", color: "white", fontWeight: "bolder", fontSize :"14px", margin: "30px 0 10px 0"} : {width: "100%", height: "3rem", background: "green", border:"none", borderRadius: "5px", color: "white", fontWeight: "bolder", fontSize :"14px", margin: "30px 0 10px 0"}} onClick={() => check ? handleBookTransaction() : ""}>Claim Refund</button>
                <p style={{fontSize: "12px", fontWeight: "bolder", marginBottom: "20px"}}>
                    *Once refund is claimed, {info.firstname} will receive ticket, ensure to input correct details to avoid disrupt of data
                </p>
            </div>
        </div>
    )
}

export default Standard;
