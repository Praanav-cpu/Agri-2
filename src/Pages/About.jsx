import React from "react";
import './About.css'
import farmerf from '../assets/farmerf.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-title">
        <img 
              src={farmerf}
              alt="Placeholder Image 1" 
              // className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          <h2>ABOUT US...</h2>
        </div>
        <p className="about-text">
          Agriculture is the practice of cultivating the land and raising animals to produce food
          and materials for people. It's a vital part of the global economy and a major source of food and jobs.
        </p>
      </section>

      <section className="supply-chain-section">
        <h3>WHAT IS SUPPLY CHAIN TRANSPARENCY</h3>
        <p className="supply-text">
          Supply chain transparency is the practice of sharing information about a product’s journey
          from raw materials to the finished product, and how it impacts the environment and people.
          This includes sharing information about:
        </p>
        <ul className="supply-list">
          <li>Production and distribution: Where and how the product is made</li>
          <li>Labor practices: The labor practices involved in the production process</li>
          <li>Environmental impacts: Any environmental impacts that occur along the way</li>
        </ul>
      </section>

      <section className="team-section">
        <h3>OUR TEAM MEMBERS</h3>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://example.com/member1.jpg"
              alt="Member 1"
              className="team-image"
            />
          </div>
          <div className="team-member">
            <img
              src="https://example.com/member2.jpg"
              alt="Member 2"
              className="team-image"
            />
          </div>
          <div className="team-member">
            <img
              src="https://example.com/member3.jpg"
              alt="Member 3"
              className="team-image"
            />
          </div>
          <div className="team-member">
            <img
              src="https://example.com/member4.jpg"
              alt="Member 4"
              className="team-image"
            />
          </div>
          <div className="team-member">
            <img
              src="https://example.com/member5.jpg"
              alt="Member 5"
              className="team-image"
            />
          </div>
          <div className="team-member">
            <img
              src="https://example.com/member6.jpg"
              alt="Member 6"
              className="team-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
