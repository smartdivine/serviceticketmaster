import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './app.css'

const Home = () => {
  const [openSections, setOpenSections] = useState([false, false, false, false]);

  const toggleSection = (index) => {
    setOpenSections((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div style={{ width: "90%", margin: "40px auto" }} className="body">
      <div style={{ display: "grid", gap: "1rem" }}>
        {/* Section 1 */}
        <div
          style={{
            border: "1.4px solid rgba(128, 128, 128, 0.2)",
            borderTop: openSections[0] ? "4.3px solid #0132F3" : "1.4px solid rgba(128, 128, 128, 0.2)",
            padding: "15px",
            cursor: "pointer",
            transition: "all 100ms ease-in",
            padding: "18px"
          }}
          className={openSections[0] ? "shadow-class" : ""}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleSection(0)}
          >
            <p style={{ fontWeight: "bold", fontSize: "14px"}}>
              Have A Question? Search Our Help Articles
            </p>
            <FontAwesomeIcon
              icon={openSections[0] ? faChevronUp : faChevronDown}
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
            />
          </div>
          {openSections[0] && (
            <div style={{ marginTop: "10px" }} className="section_1">
              {/* Content for section 1 */}
              <button style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 25px",
                gap: "10px",
                background: onmouseover ? "transparent" : "",
                border: "1px solid #0132F3",
                color: onmouseover && "#0132F3",
                color: onmousedown && "white",
                borderRadius: "5px",
              }} className="explore-btn">
                <b style={{fontSize: "15px"}}>Explore Our Articles</b>
                <FontAwesomeIcon icon={faArrowRight}/>
              </button>
              <p>Read the most frequently asked questions:</p>
              <div>
                <li><a href="">How are ticket prices and fees determined</a></li>
                <li><a href="">1099-K Information</a></li>
                <li><a href="">How do i request a refund?</a></li>
              </div>
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div
          style={{
            border: "1.4px solid rgba(128, 128, 128, 0.2)",
            borderTop: openSections[1] ? "4.3px solid #0132F3" : "1.4px solid rgba(128, 128, 128, 0.2)",
            padding: "15px",
            cursor: "pointer",
            boxShadow: openSections[1] ? "0 4px 10px rgb(128, 128, 128, .4)" : "",
            padding: "18px"
          }}
          onClick={() => toggleSection(1)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
             Already Have Tickets? Chat With Us
            </p>
            <FontAwesomeIcon
              icon={openSections[1] ? faChevronUp : faChevronDown}
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
            />
          </div>
          {openSections[1] && (
            <div style={{ marginTop: "10px" }}>
              {/* Content for section 2 */}
              <button style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 25px",
                gap: "10px",
                background: onmouseover ? "transparent" : "",
                border: "1px solid #0132F3",
                color: onmouseover && "#0132F3",
                color: onmousedown && "white",
                borderRadius: "5px",
              }} className="explore-btn">
                <b style={{fontSize: "15px"}}>Sign In</b>
                <FontAwesomeIcon icon={faArrowRight}/>
              </button>
              <ul style={{listStyleType: "numeric", width: "80%", margin: "20px auto", display: "grid", gap:"5px"}}>
                <li>Find your order in <b>My Tickets.</b></li>
                <li>Select the <b>Chat</b> icon below.</li>
              </ul>
              <p style={{margin: "0 5px 20px 0"}}>What you get when you chat with us:</p>
              <ul style={{width: "87%", margin: "0 auto 10px auto", display: "grid", gap: "15px"}}>
                <li>Agent support from 9 a.m. to midnight ET.</li>
                <li>Virtual assistant available 24/7.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div
          style={{
            border: "1.4px solid rgba(128, 128, 128, 0.2)",
            borderTop: openSections[2] ? "4.3px solid #0132F3" : "1.4px solid rgba(128, 128, 128, 0.2)",
            padding: "15px",
            cursor: "pointer",
            boxShadow: openSections[2] ? "0 4px 10px rgb(128, 128, 128, .4)" : "",
            padding: "18px"
          }}
          onClick={() => toggleSection(2)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
              Don't Have Tickets Or Can't Sign In? Email Us
            </p>
            <FontAwesomeIcon
              icon={openSections[2] ? faChevronUp : faChevronDown}
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
            />
          </div>
          {openSections[2] && (
            <div style={{ marginTop: "10px" }} className="section3">
              {/* Content for section 3 */}
              <button style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 25px",
                gap: "10px",
                background: onmouseover ? "transparent" : "",
                border: "1px solid #0132F3",
                color: onmouseover && "#0132F3",
                color: onmousedown && "white",
                borderRadius: "5px",
              }} className="explore-btn">
                <b style={{fontSize: "15px"}}>Email Us</b>
                <FontAwesomeIcon icon={faArrowRight}/>
              </button>
              <p>Submit a form if you:</p>
              <ul>
                <li>Don't have tickets to an event yet.</li>
                <li>Need to reset your password.</li>
                <li>Can't get into your account.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 4 */}
        <div
          style={{
            border: "1.4px solid rgba(128, 128, 128, 0.2)",
            borderTop: openSections[3] ? "4.3px solid #0132F3" : "1.4px solid rgba(128, 128, 128, 0.2)",
            padding: "15px",
            cursor: "pointer",
            boxShadow: openSections[3] ? "0 4px 10px rgb(128, 128, 128, .4)" : "",
            padding: "18px"
          }}
          onClick={() => toggleSection(3)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
              Want To Reach Us By Chat? Text Us
            </p>
            <FontAwesomeIcon
              icon={openSections[3] ? faChevronUp : faChevronDown}
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
            />
          </div>
          {openSections[3] && (
            <div style={{ marginTop: "10px" }} className="section4">
              {/* Content for section 4 */}
              <button
               style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 25px",
                gap: "10px",
                background: onmouseover ? "transparent" : "",
                border: "1px solid #0132F3",
                color: onmouseover && "#0132F3",
                color: onmousedown && "white",
                borderRadius: "5px",
                marginBottom: "25px"
               }} 
               className="explore-btn"
               ><b>Reach Support</b><FontAwesomeIcon icon={faArrowRight}/></button>
              <li>Mon thru Fri, 9 a.m. to 8.30 p.m. (local time).</li>
              <li>Sat, 9 a.m. to 7 p.m. (local time).</li>
              <li>Sun, 9 a.m to 6 p.m. (local time).</li>
              <p>*Alaska and Hawaii follow pacific time zone hours of operation.</p>
              <p>To purchase tickets, <a href="">visit us online</a> or go to <a href="">our app.</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
