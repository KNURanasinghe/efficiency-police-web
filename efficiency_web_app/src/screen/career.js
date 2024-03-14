// DepartmentPage.js

import React from 'react';
import fb from '../assets/crr.jpg';
import './department.css';

function CareerPage() {
  return (
    <div className="department-page">
      <div className="left-column">
        <div className="corner-top">
          Home
        </div>
        <div className="department-header">
          Careers
        </div>
        <div className="image-wrapper"  style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={fb}
    alt="URL 2"
    className="container-photo"

    style={{  height: 'auto', maxWidth: '50%'}}
  />
</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus ac elit nec est tristique aliquet. Morbi non turpis id velit semper tempus.
          Quisque convallis metus sed mi bibendum, vel hendrerit eros tincidunt.
        </p>
        <div className='join'>
          <div className="rtext">
          <a href="#" className="rtext" style={{ color: 'black' }}>
          <strong>Join the Sri Lanka Police Today!</strong>
        </a>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="department-list-container">
          <div className="department-list-header">
            Career
          </div>
          <ul className="department-list">
            <li><a href="#mission">Overview</a></li>
            <li><a href="#history">Career Opportunities</a></li>
            <li><a href="#team">Eligibility & Hiring</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
