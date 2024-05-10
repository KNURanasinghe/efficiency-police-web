// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  return (
    <header>
      <div className="logo-and-title-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1 className="title">EFFICIENCYXCEL SL</h1>
      </div>
      <div className="established">Established</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/department">The Department</Link>
            <ul className="dropdown">
              <li>
                <Link to="/department/mission">Our Mission</Link>
              </li>
              <li>
                <Link to="/department/history">Our History</Link>
              </li>
              <li>
                <Link to="/department/executive-team">Executive Team</Link>
              </li>
              <li>
                <Link to="/department/inspector-general">Office Of Inspector General</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/career">Careers</Link>
            <ul className="dropdown">
              <li>
                <Link to="/career/overview">Overview</Link>
              </li>
              <li>
                <Link to="/career/opportunities">Career Opportunities</Link>
              </li>
              <li>
                <Link to="/career/eligibility">Eligibility & Hiring</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/media-center">Media Center</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
