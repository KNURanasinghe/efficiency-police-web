// HomePageContent.js
// HomePage.js
import React from 'react';
import './homePage.css';

function HomePage() {
  return (
    <div className="container">
   
      <div className="row">
        <div className="container-item">Press Release</div>
        <div className="container-item">Police News</div>
        <div className="container-item">Notable Services</div>
      </div>
      <div className="row">
        <div className="container-item">Speed Events</div>
        <div className="container-item">Wanted Persons</div>
        <div className="container-item">Missing Persons</div>
        <div className="container-item">Tender Notices</div>
      </div>
    </div>
  );
}

export default HomePage;
