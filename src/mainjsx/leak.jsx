import React from "react";
import yetAnotherImage from '../images/sza.tiff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faRotate } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Leak = () => {
    return (
            <div>
            <div className="bg"></div>
                    <div
                      className='show-btn show-btn2'
                    >
                        <div className="weirdh2">
                        <h4>PAST EVENT</h4>
                        </div>
                      <img src={yetAnotherImage} alt='CoverImage' className="coverimg"/>
                      <div className='cover'>
                        <p>SZA - SOS Tour</p>
                        <p>Wed, Sept 20, 8:00 PM • Kaseya Center, Miami, FL</p>
                        <span>
                          <p>3 tickets</p>
                          <FontAwesomeIcon icon={faTicketAlt} className='ticket-icon' />
                        </span>
                        <div className="sold">
                                <FontAwesomeIcon icon={faRotate} className='' />
                            <span style={{fontSize: "14.5px"}}> <strong>2</strong> sold</span>
                            </div>
                      </div>
                    </div>
                    {/* <div className="bg"></div>
                    <div
                      className='show-btn show-btn2'
                    >
                        <div className="weirdh2">
                        <h4>PAST EVENT</h4>
                        </div>
                      <img src={yetAnotherImage} alt='' />
                      <div className='cover'>
                        <p>Drake: The Alt Yeah yeah</p>
                        <p>Wed, 20px hmu let meet</p>
                      </div>
                    </div> */}
        </div>
    )
}


export default Leak