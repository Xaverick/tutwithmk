import React from 'react';
import './SpinnerLoadingScreen.css';

const SpinnerLoadingScreen = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
  // return (
  //   <div className="loading-screen">
  //     <div className="loading-spinner"></div>
  //   </div>
  // );
};

export default SpinnerLoadingScreen;