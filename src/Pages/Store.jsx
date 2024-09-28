import React from 'react';
import './Store.css';

function Store() {
  return (
    <div className="storehouse-container">
      {/* Background Section */}
      <div className="background-image">
        {/* Header Section */}
        <header className="header">
          <h1>Store House <span className="home-icon">🏡</span></h1>
          <p>How much days You can store your grains/crops</p>
        </header>
        
        {/* Form Section */}
        <div className="form-container">
          <h2 className="form-header">Enter Details Here</h2>
          
          <form className="storehouse-form">
            <select className="form-input">
              <option>Select Fertilizer/crops</option>
              <option>Fertilizer A</option>
              <option>Fertilizer B</option>
              <option>Crop A</option>
              <option>Crop B</option>
            </select>
            
            <input type="text" className="form-input" placeholder="Enter date here" />
            <input type="text" className="form-input" placeholder="Enter Other details" />
            
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Store;
