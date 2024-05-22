// MediaCenter.js
import React from 'react';
import './MediaCenter.css';
import p1 from '../../assets/media/q1.jpg';
import p2 from '../../assets/media/q2.jpg';
import p3 from '../../assets/media/q3.jpg';
import p4 from '../../assets/media/q4.jpg';
import p5 from '../../assets/media/q5.jpg';
import p6 from '../../assets/media/q6.jpg';
import photo1 from '../../assets/1.jpg';
import photo2 from '../../assets/2.jpg';
import photo3 from '../../assets/3.jpg';
import photo4 from '../../assets/4.jpg';


function MediaCenter() {
  return (
    <div className="media-center">
      <h1>Media Center</h1>
      <div className="gallery">
        <div className="item">
          <img src={p1}  alt='p1'/>
          
        </div>
        <div className="item">
          <img src={p2} alt='p2' />
          
        </div>
        <div className="item">
          <img src={p3} alt='p3' />
          
        </div>
        <div className="item">
          <img src={p4} alt='p4' />
          
        </div>
        <div className="item">
          <img src={p5}  alt='p5'/>
          
        </div>
        <div className="item">
          <img src={p6} alt='p6'/>
          
        </div>
        
        <div className="item">
          <img src={photo4} alt='p6'/>
          
        </div>
        <div className="item">
          <img src={photo3} alt='p6'/>
          
        </div>
        <div className="item">
          <img src={photo2} alt='p6'/>
          
        </div>
        <div className="item">
          <img src={photo1} alt='p6'/>
          
        </div>
      </div>
    </div>
  );
}

export default MediaCenter;
