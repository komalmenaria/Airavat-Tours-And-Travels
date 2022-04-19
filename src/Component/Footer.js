import React from "react";
import Logo from "../img/Logo.svg";
import FBICON from "../img/Facebook-Icon.svg";
import INSTAICON from "../img/instagram.svg";
import TWICON from "../img/Twitter.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-div">
          <img
            src={Logo}
            alt="airavat-tours-and-travels"
            className="footer-logo"
          />
          <p>Book your trip in minute, get full Control for much longer.</p>
          <br />
          <div className="social-icons">
            <a href="https://www.facebook.com" className="footer-fb">
              <img src={FBICON} alt="airavat-facebook" />
            </a>
            <a href="https://www.instagram.com/airavattoursandtravels">
              <img src={INSTAICON} alt="airavat-instagram" />
            </a>
            <a href="https://twitter.com/">
              <img src={TWICON} alt="airavat-twitter" />
            </a>
          </div>
        </div>
        <div className="footer-info">
          <span>Company</span>
         <a href="#"> <p>About</p></a>
         <a href="#">  <p>Packages</p>   </a>
         <a href="#">  <p>Contact</p>   </a>
        </div>

        <div className="footer-info">
          <span>Contact</span>
          <a href="#"> <p>Help/FAQ</p>   </a>
          <a href="#"> <p>Press</p>   </a>
          <a href="#"> <p>Affilates</p>   </a>
        </div>
        <div className="footer-info">
          <span>More</span>
         <a href="#">  <p>Airlinefees</p>   </a>
         <a href="#">  <p>Airline</p>   </a>
         <a href="#">  <p>Ticket Booking</p>   </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
