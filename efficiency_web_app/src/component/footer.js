import React from 'react';
import './footer.css';
import  SocialMediaIcons from './socialMedia'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="footer-column">
          <ul>
          <h3>Head Quates Address</h3>
          <h3>Accessbility</h3>
          <h3>Privacy</h3>
          </ul>
        </div>
       
      </div>
      <SocialMediaIcons/>
      <div className="footer-text"></div> 
    </footer>
  );
}

export default Footer;
