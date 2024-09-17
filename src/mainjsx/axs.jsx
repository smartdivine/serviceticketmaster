import React, { useState } from "react";
import first_image from "./homeimg/axs-img1.jpg";
import second_image from "./homeimg/axs-img2.jpg";
import third_image from "./homeimg/axs-img3.jpg"
import fourth_image from "./homeimg/axs-img4.jpg"
import fifth_image from "./homeimg/axs-img5.jpg";
import sixth_image from "./homeimg/axs-img6.jpg";
import seventh_image from "./homeimg/axs-img7.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'
import { faChevronLeft, faEye, faEyeSlash, faInfoCircle, faRotateRight, faTicketAlt } from "@fortawesome/free-solid-svg-icons";


const Axs = ({event, info, events}) => {

    const [state, setstate] = useState(false)
    const [display, setdisplay] = useState(false)
    const [eye, seteye] = useState(false)
    let color;
    if (display) {
        // Delay the execution by 800ms
        setTimeout(() => {
            color = "#081747";
            // Update the meta tag after the delay
            document.querySelector('meta[name="theme-color"]').content = color;
        }, 800);
    } else if (state) {
        color = "#fff";
        // Update the meta tag immediately
        document.querySelector('meta[name="theme-color"]').content = color;
    } else {
        color = "#081747";
        // Update the meta tag immediately
        document.querySelector('meta[name="theme-color"]').content = color;
    }
    
    document.body.style.background = "#f6f6f6";
    

    const seat = []
    for (let index = 0; index < event.numberOfSeats; index++) {
        seat.push(event.startingSeatNumber + index)
    }

    const name = JSON.stringify(events)

    return (
        <div>
            {state ? (
                <div style={{background: "#f6f6f6"}}>
                                        <div style={{

                    }}>
                        <img src={fifth_image} alt="fifth image" />
                    </div>
                    {events.map((event, item) => (
                        <>
                    <div style={{
                            width: "92%",
                            padding: "10px 0",
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: ".5px solid rgb(128, 128, 128, .7)",
                            marginBottom: "10px",
                        }} onClick={() => setdisplay(event)} key={item}>
                        <div>
                            <p
                            style={{
                                color: "rgb(0,0,0,.75)",
                                marginBottom: "3px"
                            }}
                            ><b style={{textTransform: "uppercase", color: "#0069D7", fontSize: "17px",}}>{event.day}</b>{" "} 
                            <span style={{textTransform: "uppercase"}}>{event.date}, {event.year}</span>, {} - {event.time} PDT</p>
                            <p style={{
                                WebkitTextStroke: ".20px", 
                                fontSize: "17px", 
                                marginBottom: "5px",
                                width: "20rem"
                                }}>{event.title}</p>
                            <p style={{color: "rgb(0,0,0,.7)"}}>{event.location}</p>
                        </div>
                        <div style={{
                            color: "#0069D7",
                            translate: "0 25px",
                            fontSize: "33px"
                        }}>
                            <p style={{fontSize: "17px", translate: "13.5px 7.8px", position: "absolute", color: "white"}}>{event.numberOfSeats}</p>
                            <FontAwesomeIcon icon={faTicketAlt}/>
                        </div>
                    </div>
                        </>
                    ))}
                    
                </div>
            ) : (
                <>
                <img src={second_image}/>
                <img src={state ? fourth_image : third_image} style={{translate: "0 -4.5px"}} />
                </>
            )}
            {/* main ticket view */}
            {display && (
                <div style={{
                    height: "100vh",
                    width: "100%",
                    background: "#010E2E",
                    top: "0",
                    zIndex: "999",
                    color: "white",
                    overflow: "auto"
                }} 
                className="axs-move-up-animation">
                    {/* first section before buttons */}
                    <div style={{
                        position: "sticky",
                        top: "0",
                        zIndex: "999"
                    }}>
                        {/* header */}
                    <div style={{
                        // style for header 
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 15px 15px 15px",
                        alignItems: "center",
                        textAlign: "center", 
                        background: "#081747",

                    }}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: "20px"}} onClick={() => setdisplay(false)}/>
                        <div style={{display: "grid", placeItems: "center"}}>
                            <p style={{fontWeight: "bold", fontSize: "16px", width: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 1.5}}>{display.title}</p>
                            <p style={{textTransform: "uppercase", fontSize: "12.5px", color: "rgb(255, 255, 255, .8)", width: "90%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{display.day} {display.date}, {display.year} - {display.time} | <span style={{textTransform: "capitalize"}}>{display.location}</span></p>
                        </div>
                        <FontAwesomeIcon icon={faInfoCircle} style={{fontSize: "20px", color: "#081747", background: "white", borderRadius: "50%", border: "1px solid white"}}/>
                    </div>
                    {/* below header */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        background: "#081747"
                    }}>
                        <div style={{
                            borderBottom: "1px solid #0069D7",
                            width: "50%",
                            display: "grid",
                            placeItems: "center",
                            height: "3rem",
                            color: "#0069D7"
                        }}>
                            <p style={{WebkitTextStroke: ".25px"}}>Ticket ({display.numberOfSeats})</p>
                        </div>
                        <div style={{
                            borderBottom: "1px solid rgb(255, 255, 255, .4)",
                            width: "50%",
                            display: "grid",
                            placeItems: "center",
                            height: "3rem",
                            color: "rgb(255, 255, 255, .6)"
                        }}>
                            <p style={{WebkitTextStroke: ".25px"}}>Event Info</p>
                        </div>
                    </div>
                    </div>
                    {/* below nav bar */}
                    <div style={{
                        background: "#010E2E",
                        paddingTop: "1.5rem"
                    }}>
                        <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                        <div style={{
                            color:"rgb(255,255,255, .6)",
                            fontSize: "23px",
                            translate: "15px 0"
                        }}>
                            <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} onClick={() => seteye(!eye)}/>
                        </div>
                        <div style={{
                            display: "grid",
                            placeItems: "center",
                            gap: "20px",
                        }}>
                        <h2>Scan for Entry</h2>
                        <img src={sixth_image} alt="sixth image" style={eye ? {
                            width: "10rem",
                            borderRadius: "15px",
                        } : {
                            width: "10rem",
                            borderRadius: "15px",
                            filter: "blur(10px)"
                        }}/>
                        <img src={seventh_image} alt="seventh image" style={{
                            width: "20rem",
                            filter: "brightness(1.5)"
                        }}/>
                        </div>
                        <div style={{
                            color:"rgb(255,255,255, .6)",
                            fontSize: "23px",
                            translate: "-10px 0"
                        }}>
                            <FontAwesomeIcon icon={faRotateRight}/>
                        </div>
                    </div>
                    {/* below main section */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 1.4rem",
                        marginTop: "1rem"
                    }}>
                        <button style={{
                            width: "47.5%",
                            padding: "12px 10px",
                            borderRadius: "20px",
                            background: "#0069D4",
                            border: "none",
                            color: "white",
                            fontWeight: "bold",
                            fontSize:"15px"
                        }}>
                            Transfer
                        </button>
                        <button style={{
                            width: "47.5%",
                            padding: "12px 10px",
                            borderRadius: "20px",
                            background: "#0069D4",
                            border: "none",
                            color: "white",
                            fontWeight: "bold",
                            fontSize:"15px"
                        }}>
                            Sell
                        </button>
                    </div>
                    {/* end of button section above */}
                    <div style={{
                        margin: "1.7rem 0 6rem 0"
                    }}>
                    {seat.map((item, i) => (
                        <div style={{
                            width: "90%",
                            background: "#081747",
                            margin: "0 auto",
                            borderRadius: "10px",
                            marginBottom: "12px",
                            paddingBottom: 20
                        }}>
                            {/* entry section */}
                            <div style={{
                                background: "#6400EE",
                                borderRadius: "10px 10px 0 0",
                                textAlign: "center",
                                padding: "8px 0"
                            }}>
                                Entry: <b>Gate B</b>
                            </div>
                            {/* standard */}
                            <div style={{
                                padding: "0 15px"
                            }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                textTransform: "lowercase",
                                marginTop: 15
                            }}>
                            <p style={{textTransform: "capitalize", fontSize: "15px"}}>{display.entry.split(" ")[0]}</p>
                            <p style={{textTransform: "capitalize", fontSize: "15px"}}>{display.entry.split(" ")[1]}</p>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "1.5rem"
                            }}>
                                <div> 
                                    <p style={{ fontSize: "15.5px" ,marginBottom: 5}}>SEC</p>
                                    <p style={{fontWeight: "bolder", fontSize: "15.5px"}}>{display.Generaladmission ? "GA" : ""}{display.initialSection}</p>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <p style={{ fontSize: "15.5px" ,marginBottom: 5}}>ROW</p>
                                    <p style={{fontWeight: "bolder", fontSize: "15.5px"}}>{display.initialRow}</p>
                                </div>
                                <div style={{textAlign: "right"}}>
                                    <p style={{ fontSize: "15.5px" ,marginBottom: 5}}>SEAT</p>
                                    <p style={{fontWeight: "bolder", fontSize: "15.5px"}}>{display.Generaladmission ? "-" : item}</p>
                                </div>
                            </div>
                            <div style={{
                                margin: "24px 0 0 0"
                            }}>
                                <p style={{color: "rgb(255, 255, 255, .75)"}}>Aisle seat</p>
                                <div style={{margin: "25px 0"}}>
                                    <hr style={{ border: "1px solid rgb(128,128, 128, .3)"}}/>
                                </div>
                                <p style={{textAlign: "center"}}>Barcode will load after your ticket is scanned</p>
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            )}
            {/* end of main ticket view */}
            <div style={{
                position: "fixed",
                bottom: "0", 
                width: "100%", 
                background: "white",
                padding: "5px 0 10px 0"
                }}
                onClick={() => setstate(!state)}
                >
            <img src={state ? fourth_image : first_image} />
            </div>
        </div>
    )
}


export default Axs;