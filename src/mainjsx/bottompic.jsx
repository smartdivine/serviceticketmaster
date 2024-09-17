import React, { useState, useEffect } from 'react';
import bottompic from './homeimg/bottomtm.jpg';
import bottompic2 from './homeimg/tmbtm2.jpg';
import middle1 from './homeimg/first_top.jpg';
import bodytm from './homeimg/fourth_top.jpg';
import middle2 from './homeimg/third_top.jpg';
import body3 from './homeimg/sixth_top.jpg';
import nicki from './homeimg/second_top.jpg';
import fifth_body from './homeimg/fifth_top.jpg';
import Sdet from '../component/securetixdet';
import body_seven from './homeimg/seventh_top.jpg';
import body_eight from './homeimg/eighth_top.jpg';
import body_nine from './homeimg/nineth_top.jpg';
import btm2 from './homeimg/tmbottom2.jpg';
import animate from './homeimg/firstplay.mp4';
import btm_account from './homeimg/btm_account.jpg';
import image1 from './homeimg/account_image1.jpg';
import image2 from './homeimg/account_image2.jpg';

const Bottompic = () => {
  const [bottomImage, setBottomImage] = useState(bottompic);
  const [displayhome, setDisplayHome] = useState(() => {
    const storedDisplayHome = localStorage.getItem('displayhome');
    return storedDisplayHome !== null ? JSON.parse(storedDisplayHome) : true;
  });
  const [showSdet, setShowSdet] = useState(true);
  const [showTm, setShowTm] = useState(true);
  const [showTmvd, setShowTmvd] = useState(true);
  const [showAnimate, setShowAnimate] = useState(true);
  const [index, setIndex] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const tmTimeoutId = setTimeout(() => {
      setShowTm(false);
    }, 3000);

    return () => {
      clearTimeout(tmTimeoutId);
    };
  }, []);

  useEffect(() => {
    const tmvdTimeoutId = setTimeout(() => {
      setShowTmvd(false);
    }, 7000);

    return () => {
      clearTimeout(tmvdTimeoutId);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('displayhome', JSON.stringify(displayhome));
  }, [displayhome]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSdet(false);
    }, 5500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setShowAnimate(false);
    }, 2400);

    return () => clearTimeout(interval);
  }, []);

  const handleHomeClick = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 100);
    setIndex((prevIndex) => (prevIndex % 3) + 1);
  };

  return (
    <div className='bright'>
      <div>
          {index === 1 && (
            showAnimate ? (
              <div style={{ width: "100%" }}>
                <video autoPlay muted loop playsInline style={{ width: '100%', height: "150vh", position: "fixed", zIndex: "999999999999999999999", top: "-20rem", background: "#1e262d" }}>
                  <source src={animate} type='video/mp4' />
                </video>
              </div>
            ) : (
              <div className="home" style={{ position: "fixed", height: "100vh", overflow: "auto" }}>
                {showSdet && <Sdet display={displayhome} />}
                <div>
                  <div><img src={middle1} alt="Middle 1" /></div>
                  <div><img src={nicki} alt="Middle 2" /></div>
                  <div><img src={middle2} alt="Middle 3" /></div>
                </div>
                <div>
                  <img src={bodytm} alt="" />
                  <img src={fifth_body} alt="" style={{ margin: "-10px 0" }} />
                  <img src={body3} alt="" style={{ margin: "0 0 -5px 0" }} />
                  <img src={body_seven} alt="" />
                  <img src={body_eight} alt="" style={{ margin: "-10px 0" }} />
                  <img src={body_nine} alt="" style={{ marginBottom: 60 }} />
                </div>
                <div className="home-bottom" style={{transform: "translateY(7px)"}}>
                  <img src={btm2} alt="Navigation" onClick={handleHomeClick} className={fade ? "" : 'active'}/>
                </div>
              </div>
            )
          )}

        {index === 2 && (
          <div className="home-bottom">
            <img src={bottompic2} alt="Navigation" onClick={handleHomeClick} className={fade ? "" : 'active'}/>
          </div>
        )}
      </div>

      {index === 3 && (
        <div style={{
          height: "100vh",
          position: "fixed",
          top: "0",
          background: "white",
          width: "100%",
          zIndex: "99999",
          overflow: "auto",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 150
          }}>
            <div style={{ background: "#121212", color: "white", textAlign: "center" }}>
              <h4 style={{ padding: 15, position: "sticky", top: 0, background: "#121212", fontSize: "15.5px", fontFamily: "Nunito, Arial, sans-serif", letterSpacing: ".02em", fontStretch: "extra-expanded"}}>My Account</h4>
              <div style={{
                textAlign: "left",
                width: "90%",
                margin: "10px auto 25px auto",
                display: "grid",
                gap: "8px"
              }}>
                <p style={{
                  fontSize: "24px", margin: "0px 0 0px 0", WebkitTextStroke: ".4px", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: ".02em"
                }}>Vee</p>
                <p style={{ color: "rgb(255, 255, 255, .7)", fontFamily: "Arial, sans-serif", letterSpacing: ".02em", fontSize: "16px",  }}>nikejigg@gmail.com</p>
              </div>
            </div>
            <img
  src={image1}
  alt="account1"
  style={{
    width: "100%",
    height: "auto",
    imageRendering: "crisp-edges", // Makes edges crisper
    WebkitImageRendering: "optimize-contrast", // Enhances contrast in Webkit browsers
  }}
/>
<img
  src={image2}
  alt="account1"
  style={{
    width: "100%",
    height: "auto",
    imageRendering: "crisp-edges",
    WebkitImageRendering: "optimize-contrast",
  }}
/>

          </div>
          <div className="home-bottom" style={{transform: "translateY(-7px)", height: "5.5rem"}}>
            <img src={btm_account} alt="Navigation" onClick={handleHomeClick} className={fade ? "" : 'active'}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bottompic;
