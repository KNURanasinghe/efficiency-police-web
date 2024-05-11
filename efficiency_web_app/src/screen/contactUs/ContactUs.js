// ContactUs.js
import React from 'react';
import './contactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p><strong>Sri Lanka Police Department</strong></p>
        <p><strong>Address:</strong> 1st Floor, Police Head Quarters, Colombo 1, Sri Lanka</p>
        <p><strong>Telephone:</strong> +94 11 2421111</p>
        <p><strong>Email:</strong> info@police.lk</p>
        <p>For general inquiries, assistance, or to report emergencies, please feel free to contact us using the information provided above. 
          Our dedicated team is available around the clock to address your concerns and ensure public safety and security across Sri Lanka. 
          Additionally, you can visit our website for more information on our services, community outreach programs, and latest news updates.</p>
      </div>
    </div>
  );
}

export default ContactUs;
