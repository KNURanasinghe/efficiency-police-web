import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import c from '../assets/c.jpg';
import e from '../assets/ee.jpg';
import fb from '../assets/fb.jpg';
import linkd from '../assets/in.jpg';
import ins from '../assets/ins.jpg';
import m from '../assets/m.jpg';
import x from '../assets/x.jpg';
import './homePage.css';


function HomePageContent() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  
  const history = useHistory();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 3 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide duration as needed

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);
  
  // Function to open URL in new tab
  const openUrlInNewTab = (url) => {
    window.open(url, '_blank');
  };
  const goToEServicePage = () => {
    history.push('/eservice'); // Navigate to '/eservice' path
  };
  const goToContactPage = () => {
    history.push('/contact'); 
  };
  const goToMediaCenterPage = () => {
    history.push('/media-center'); 
  };

  return (
    <div className='mcontainer'>
      
    <div className="container">
    
      {/* Photos */}
      <div className="photo-container">
        <img
          src={currentPhotoIndex === 0 ? photo1 : currentPhotoIndex === 1 ? photo2 : currentPhotoIndex === 2 ? photo3 : photo4}
          alt={`Photo ${currentPhotoIndex + 1}`}
          className="photo"
        />
      </div>
      {/* Line to separate photos */}
      <hr className="separator" />
      {/* Emergency Text */}
      <div className="emergency-text">In an Emergency Call 119</div>
      {/* Containers */}
      <div className="row">
        {/* Clickable Containers */}
        <div className="clickable-column">
          <div className="clickable-container small" onClick={() => openUrlInNewTab('https://www.instagram.com/accounts/login/')}>
            <img
              src={ins}
              alt="URL 1"
              className="container-photo"
            />
          </div>
          <div className="clickable-container small" onClick={() => openUrlInNewTab('https://web.facebook.com/login/?_rdc=1&_rdr')}>
            <img
              src={fb}
              alt="URL 2"
              className="container-photo"
            />
          </div>
          <div className="clickable-container small" onClick={() => openUrlInNewTab('https://twitter.com/i/flow/login')}>
            <img
              src={x}
              alt="URL 3"
              className="container-photo"
            />
          </div>
          <div className="clickable-container small" onClick={() => openUrlInNewTab('https://www.linkedin.com/company/login/')}>
            <img
              src={linkd}
              alt="URL 4"
              className="container-photo"
            />
          </div>
        </div>
        {/* E Services */}
        <div className="container-item" onClick={goToEServicePage}>
          <h2>E Services</h2>
          <img
            src={e}
            alt="E Services"
            className="container-photo"
          />
        </div>
        {/* Contact */}
        <div className="container-item" onClick={goToContactPage}>
          <h2>Contact</h2>
          <img
            src={c}
            alt="Contact"
            className="container-photo"
          />
        </div>
        {/* Media Center */}
        <div className="container-item" onClick={goToMediaCenterPage}>
          <h2>Media Center</h2>
          <img
            src={m}
            alt="Media Center"
            className="container-photo"
          />
        </div>
      </div>
      
    </div>
   
    </div>
    
  );
}

export default HomePageContent;
