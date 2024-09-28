import React from 'react';

const WebDesignerPortfolio = () => {
  return (
    <div className="container text-center py-5 ">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img 
            alt="Portrait of a web designer" 
            src="src/assets/Images/developer.jpg" 
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mainHeading2">Hello!</h1>
          <p>
            I'M AN INDIA-BASED WEB DESIGNER AND DEVELOPER WORKING CLOSELY WITH EARLY-STAGE 
            STARTUP FOUNDERS TO CREATE BEAUTIFUL AND LOVEABLE WEBSITES FOR THEIR BUSINESS.
          </p>
          <button className="custom-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default WebDesignerPortfolio;
