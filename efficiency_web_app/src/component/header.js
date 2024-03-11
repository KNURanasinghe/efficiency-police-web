// Header.js
import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to point to your logo file
import './header.css'; // Import your CSS file

function Header() {
  return (
    <header>
      <div className="logo-and-title-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1 className="title"> EFFICIENCYXCEL SL </h1>
      </div>
      <div className="established">
        Established
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">The Department</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
