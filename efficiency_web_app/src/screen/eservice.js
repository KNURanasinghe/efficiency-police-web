import React, { useState } from 'react';
import './eservice.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Modal component for login
function LoginModal({ onClose, onSignup }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send login request to the server
      const response = await axios.post('YOUR_LOGIN_ENDPOINT', formData);
      console.log('Login Response:', response.data);
      onClose(); // Close the modal upon successful login
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error, e.g., display error message
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </label>
          <button type="submit">Login</button>
          <p>Don't have an account? <button onClick={onSignup}>Signup</button></p>
        </form>
      </div>
    </div>
  );
}

function EServicePage() {
  const [serviceType, setServiceType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleServiceTypeChange = (type) => {
    if (isLoggedIn()) {
      setServiceType(type);
    } else {
      setShowModal(true);
    }
  };

  const isLoggedIn = () => {
    // Implement your logic to check if the user is logged in
    // For example, check if there's a token in localStorage
    return false; // Placeholder logic
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSignup = () => {
    // Redirect to the signup page
    history.push('/signup'); // Navigate to signup page
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  /*   try {
      // Submit data based on service type
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', formData);
      console.log('Response from API:', response.data);
      // Optionally, reset the form data after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
    } */
  };

  return (
    <div className="container">
      <h1>E-Services</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleServiceTypeChange('police_clearance')}>Police Clearance</button>
          </li>
          <li>
            <button onClick={() => handleServiceTypeChange('online_complaints')}>Online Complaints</button>
          </li>
          <li>
            <button onClick={() => handleServiceTypeChange('lost_item_report')}>Lost Mobile</button>
          </li>
        </ul>
      </nav>

      {showModal && <LoginModal onClose={handleCloseModal} onSignup={handleSignup} />}
      
      {/* Render forms based on selected service type */}
      {serviceType === 'police_clearance' && (
        <form onSubmit={handleSubmit}>
          <h2>Police Clearance Request</h2>
          {/* Add input fields for police clearance */}
          <button type="submit">Submit</button>
        </form>
      )}
      {serviceType === 'online_complaints' && (
        <form onSubmit={handleSubmit}>
          <h2>Online Complaints</h2>
          {/* Add input fields for online complaints */}
          <button type="submit">Submit</button>
        </form>
      )}
      {serviceType === 'lost_item_report' && (
        <form onSubmit={handleSubmit}>
          <h2>Lost Item Report</h2>
          {/* Add input fields for lost item report */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default EServicePage;
