import React from "react";
import Hero from "../img/Hero.svg";
import Service from "./Service";

import Service1 from "../img/Service1.svg";
import Service2 from "../img/Service2.svg";
import Service3 from "../img/Service3.svg";
import Service4 from "../img/Service4.svg";
import Destination from "./Destination";
import Pilgrims from "../img/Pilgrims.svg"
import Holiday from "../img/Holiday.svg"
import Short from "../img/Short.svg"
import BookTrip from "./BookTrip";
import StepIcon1 from "../img/Step1.svg"
import StepIcon2 from "../img/Step2.svg"
import StepIcon3 from "../img/Step3.svg"
import kedarnath from "../img/kedarnath.jpg"
import SEND from "../img/send.svg"
import LEAF from "../img/Leaf.svg"
import MAP from "../img/map.svg"



function Home() {
  return (
    <>
      <div className="heroSection">
        <div className="hero-content">
          <h4>Best Destinations around the world</h4>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <br />
          <a href="/packages">View Packages</a>
        </div>

        <div className="hero-image">
          <img src={Hero} alt="" />
        </div>
      </div>

      <div className="services-section">
        <span className="service-sub-heading">CATEGORY</span>
        <span className="service-heading">We Offer Best Services</span>

        <div className="services-section-content">
          <Service
            url={Service1}
            heading="Calculated Weather"
            desc="Built Wicket longer admire do barton vanity itself do in it."
          />

          <Service
            url={Service2}
            heading="Best Flights"
            desc="Engrossed listening. Park gate sell they west hard for the."
          />

          <Service
            url={Service3}
            heading="Local Events"
            desc="Barton vanity itself do in it. Preferd to men it engrossed listening."
          />

          <Service
            url={Service4}
            heading="Customization"
            desc="We deliver outsourced aviation services for military customers"
          />
        </div>
      </div>

      <div className="destination-section">
        <span className="destination-sub-heading">Top Selling</span>
        <span className="destination-heading">Top Destinations</span>

        <div className="destination-section-content">
        <Destination url={Pilgrims} title="Pilgrims Packages"  />
        <Destination url={Holiday} title="Holiday Packages" />
        <Destination url={Short} title="Short Packages"  />

        </div>
      </div>

<div className="booktrip-section">

<div className="booktrip-content">
  <span className="booktrip-subheading">Easy and Fast</span>
  <span className="booktrip-heading">Book your next trip <br /> in 3 easy steps</span>

<BookTrip url={StepIcon1} title="Choose Destination" desc="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. " />
      <BookTrip url={StepIcon2} title="Contact To Our Team" desc="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. " />
      <BookTrip url={StepIcon3} title="Make Payment" desc="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. " />
</div>

<div className="booktrip-card">
  
  <div>
    <img src={kedarnath} alt="kedarnath" />
    <strong>Trip To Chardham</strong>
    <p className="booktrip-date" ><span>1 April</span>|<span>by  Airavat Tours & Travels</span></p>
    <div className="booktrip-icons">
      <img src={LEAF} alt="" />
      <img src={MAP} alt="" />
      <img src={SEND} alt="" />
    </div>

    <p className="booktrip-people">24 people going  </p>
  </div>

</div>

</div>

      
    </>
  );
}

export default Home;
