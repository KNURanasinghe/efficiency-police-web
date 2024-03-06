import React from 'react';
import './footer.css';
import  SocialMediaIcons from './socialMedia'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>E-Services</h3>
          <ul>
            <li><a href="#">Lost Mobiles</a></li>
            <li><a href="#">Online Components</a></li>
            <li><a href="#">Police Clearance</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacts</h3>
          <ul>
            <li><a href="#">Ministry of Public Security Contact Details</a></li>
            <li><a href="#">Right to Information</a></li>
            <li><a href="#">Police Stations</a></li>
            <li><a href="#">Police Emergency</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Gallery</h3>
          <ul>
            <li><a href="#">Images/Videos</a></li>
            <li><a href="#">Information</a></li>
          </ul>
        </div>
      </div>
      <SocialMediaIcons/>
      <div className="footer-text"></div> 
    </footer>
  );
}

export default Footer;
