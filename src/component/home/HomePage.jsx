import React, { useState } from "react";

const HomePage = () => {
  return (
    <div className="home">
      <section>
        <header className="header-banner">
          <img
            src="./assets/images/hotel.webp"
            alt="Hotel Booking"
            className="header-image"
          />
          <div className="overlay"></div>
          <div className="animated-texts overlay-content">
            <h1>
              Welcome to <span className="phegon-color">Hotel Booking</span>
            </h1>
            <br />
            <h3>Step into a haven of comfort and luxury</h3>
          </div>
        </header>
      </section>

      <h4>
        <a className="view-rooms-home" href="/rooms">
          All Rooms
        </a>
      </h4>

      <h2 className="home-services">
        Services at <span className="phegon-color">Hotel Booking</span>
      </h2>

      <section className="service-section">
        <div className="service-card">
          <img src="./assets/images/ac.png" alt="Air Conditioning" />
          <div className="service-details">
            <h3 className="service-title">Air Conditioning</h3>
            <p className="service-description">
              Stay cool and comfortable with our state-of-the-art air
              conditioning system.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="/assets/images/mini-bar.png" alt="Mini Bar" />
          <div className="service-details">
            <h3 className="service-title">Mini Bar</h3>
            <p className="service-description">
              Enjoy a selection of beverages and snacks conveniently available
              in your room.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="/assets/images/parking.png" alt="Parking" />
          <div className="service-details">
            <h3 className="service-title">Parking</h3>
            <p className="service-description">
              Convenient and secure parking available for all our guests.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="/assets/images/wifi.png" alt="WiFi" />
          <div className="service-details">
            <h3 className="service-title">WiFi</h3>
            <p className="service-description">
              Stay connected with our high-speed internet access throughout the
              hotel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;