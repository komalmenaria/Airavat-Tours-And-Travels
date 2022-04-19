import React , { useState }  from "react";
import Logo from "../img/Logo.svg";
import NavIcon from "../img/navIcon.svg";
import CrossIcon from "../img/crossIcon.svg";
import {Link}  from 'react-router-dom'

function Header() {

  const [isMobile , setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
       
          <img src={Logo} alt="Airavat Tour and Travel"  className="logo-div"/>
       

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        
        onClick={() => setIsMobile(false)}>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>
          <Link to="/packages" className="about">
            <li>Packages</li>
          </Link>
          <Link to="/contactus" className="contactus">
            <li>Contact Us</li>
          </Link>
          <a href="tel:+918000354629" className="callus">
            <li>Call Us</li>
          </a>
        </ul>
       <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
         {isMobile ? <img src={CrossIcon} /> : <img src={NavIcon} /> }
       </div>
      </nav>
    </>
  );
}

export default Header;
