import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to point to your logo file
import './header.css'; // Import your CSS file

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="title-and-nav-container">
        <h1 className="title">Sri Lanka Police</h1>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Locations/Divisions</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Library</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
