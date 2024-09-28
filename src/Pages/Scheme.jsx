import React from 'react';
import './Scheme.css';
import farmerf from '../assets/farmerf.png';

function App() {
  return (
    <div className="schemes-container">
      {/* Farmer Image Section */}
      <div className="image-section">
      <img 
              src={farmerf}
              alt="Placeholder Image 1" 
              // className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
      </div>

      {/* Schemes Information Section */}
      <div className="info-section">
        <h1 className="header-text">SCHEMES FOR <br /> FARMERS......</h1>
        <div className="scheme-category">
          <h2 className="scheme-title">SCHEMES</h2>
          <button className="scheme-button">Our Schemes for Farmers <span>➔</span></button>
          <button className="scheme-button">Government Schemes <span>➔</span></button>
          <button className="scheme-button">Others Schemes <span>➔</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
