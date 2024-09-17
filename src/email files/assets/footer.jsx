import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import App_Store from './download_App_Store.svg'
import Play_Store from './download_Play_Store.svg'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './app.css'


const Footer = () => {


    return (
        <div style={{
            background: "#121212",
            color: "white",
            padding: "50px 25px",
            marginTop: "8rem"
        }} className="footer">
                <p style={{display:  "flex"}}><span
                style={{
                    fontSize: "25px",
                    fontStyle: "italic",
                    WebkitTextStroke: "1.2px",
                    marginBottom: "20px"
                }}
                >ticketmaster
                </span> 
                <p style={{
                    fontSize: "10px",
                    margin: "6px 10px 0 0",
                    transform: "translateX(4px)"
                }}>®</p>
                </p>
                <p style={{margin: "10px 0 20px 0"}}>Let's Connect</p>
                <div style={{display: "flex", gap: "15px", fontSize: "18px"}}>
                    <div style={{background: "white"}}>
                    <FontAwesomeIcon icon={faFacebook} style={{background: "#121212", color: "white", border: "none", borderRadius: "50%"}}/>
                    </div>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faYoutube}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <p style={{
                    margin: "25px 0 0 0"
                }}>Download Our Apps</p>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    width: "15rem",
                    margin: "20px 0 30px 0"
                }}>
                    <img src={App_Store}/>
                    <img src={Play_Store}/>
                </div>
                <p style={{margin: "20px 0 30px 0", fontSize: "12.5px"}}>By continuing past this page you agree to our <span>Terms and Use</span></p>
                <div className="strong-div-dropdown-menu-div">
                <div>
                <hr />
                <strong>Helpful Links <FontAwesomeIcon icon={faChevronDown}/></strong>
                </div>
                <div>
                    <hr />
                    <strong>Our Network <FontAwesomeIcon icon={faChevronDown}/></strong>
                </div>
                <div>
                    <hr />
                    <strong >About <FontAwesomeIcon icon={faChevronDown}/></strong>
                </div>
                <div>
                    <hr />
                    <strong>Friends &amp; Partners <FontAwesomeIcon icon={faChevronDown}/></strong>
                    <hr />
                </div>
                </div>
                <div style={{textAlign: "center", display: "grid", gap: "12.8px", fontSize: "12.5px", marginTop: "5rem"}}>
                    <li style={{listStyle: "none"}}>
                        <ul><a href="" style={{textDecoration: "none", color: "white"}}>Purchase Policy</a></ul>
                    </li>
                    <li style={{listStyle: "none"}}><a href="" style={{textDecoration: "none", color: "white"}}>Privacy Policy</a></li>
                    <li style={{listStyle: "none"}}><a href="" style={{textDecoration: "none", color: "white"}}>Manage my cookies and ad choices</a></li>
                    <li style={{listStyle: "none"}}><a href="" style={{textDecoration: "none", color: "white"}}><span style={{fontSize: "11px"}}>&#169;</span> 1999-2024 Ticketmaster. All rights reserved.</a></li>
                </div>
        </div>
    )
}

export default Footer;