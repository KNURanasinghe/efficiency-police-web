import React from 'react';
import './department.css';

function DepartmentPage() {
  
  return (
    <div className="department-page">
      <div className="left-column">
        <div className="corner-top">
          Home
        </div>
        <div className="department-header">
          The Department
        </div>
        <h3>About the Police Department</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus ac elit nec est tristique aliquet. Morbi non turpis id velit semper tempus.
          Quisque convallis metus sed mi bibendum, vel hendrerit eros tincidunt.
        </p>
      </div>
      <div className="right-column">
        <div className="department-list-container">
          <div className="department-list-header">
            The Department
          </div>
          <ul className="department-list">
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#history">Our History</a></li>
            <li><a href="#team">Executive Team</a></li>
            <li><a href="#inspector">Office of Inspector General</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DepartmentPage;
