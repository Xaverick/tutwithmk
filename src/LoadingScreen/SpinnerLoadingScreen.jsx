import React from 'react';
import './SpinnerLoadingScreen.css';
import logo from '../assets/footerLogo.webp';

const SpinnerLoadingScreen = () => {
  return (
    <div className="spinner-container">

      <div className="spinner">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );

};




export default SpinnerLoadingScreen;