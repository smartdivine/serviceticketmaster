import React from 'react';
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';



const Headies = () => {




    return (
        <nav className="navbar-grid transfer-nav-2">
        <div className="nav-left">
        <Link to="/">
          <FontAwesomeIcon icon={faTimes} style={{ color: "#fff"}}/>
          </Link>
        </div>
        <div className="nav-center transfer-nav">
          <h3>Transfer Error <div className='ex'><span>!</span></div></h3></div>
        <div className="nav-right"><a href='http://google.com'>Help</a></div>
      </nav>
    )
}

export default Headies;