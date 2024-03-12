// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
          <li><Link to="/">Home</Link></li> {/* Use Link component instead of <a> */}
          <li>
            <Link to="/department">The Department</Link> {/* Use Link component instead of <a> */}
            <ul className="dropdown">
              <li><Link to="/department/mission">Our Mission</Link></li> {/* Use Link component instead of <a> */}
              <li><Link to="/department/history">Our History</Link></li> {/* Use Link component instead of <a> */}
              <li><Link to="/department/executive-team">Excecutive Term</Link></li> {/* Use Link component instead of <a> */}
              <li><Link to="/department/inspector-general">Office Of Inspector Geners</Link></li> {/* Use Link component instead of <a> */}
            </ul>
          </li>
          <li>
            <Link to="/career">Careers</Link> {/* Use Link component instead of <a> */}
            <ul className="dropdown">
              <li><Link to="/career/overview">Overview</Link></li> {/* Use Link component instead of <a> */}
              <li><Link to="/career/opportunities">Career Opportunities</Link></li> {/* Use Link component instead of <a> */}
              <li><Link to="/career/eligibility">Eligibility & Hiring</Link></li> {/* Use Link component instead of <a> */}
            </ul>
          </li>
          <li><Link to="/media-center">Media Center</Link></li> {/* Use Link component instead of <a> */}
          <li><Link to="/contact">Contact Us</Link></li> {/* Use Link component instead of <a> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
