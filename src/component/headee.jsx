import React, { useState, useEffect } from "react";
import '../App.css'

const Headee = ({ info, events }) => {
        const initialSeconds = info.hour * 60; 
        const [totalSeconds, setTotalSeconds] = useState(initialSeconds);

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

        }, [info.hour]);

        const displayTime = () => {
            if (totalSeconds <= 0) {
                return <p style={{ color: "red"}}>Session Closed</p>;
            }

            const displayMinutes = Math.floor(totalSeconds / 60);
            const displaySeconds = totalSeconds % 60;

            return `${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
        };

        return (
            <div>
                            <nav className="navbar-grid">
                <div className="nav-left">
                    <span style={{ fontSize: "17px"}} onClick={() => window.location.href = info.redirectpage}>Cancel</span>
                </div>
                <div>
                    <h3 style={{ textAlign: "center" }}>EventPass Pro</h3>
                </div>
                <div className="nav-right">
                    <a href='http://google.com'>
                        <span className="blinkS">{displayTime()}</span>
                        <div>
                        </div>
                    </a>
                </div>
            </nav>
            <div>
                            <div>
                                <p>{events.title}</p>
                            </div>
            </div>
            </div>
        );
    };


export default Headee;
