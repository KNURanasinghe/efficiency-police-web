import React, { useState } from 'react';
import './eservice.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Modal component for login
function LoginModal({ onClose, onSignup }) {
  // Token that is given from the backend
  localStorage.setItem('token', 'access_token');
  const token = localStorage.getItem('token');
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
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', formData);
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
  const [formData, setFormData] = useState({
    fullName: '',
    policeDivision: '',
    district: '',
    itemName: '', // Only for lost_item_report
    description: '',
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
    try {
      let apiEndpoint = ''; // Placeholder for API endpoint
      let formData = {}; // Placeholder for form data
      // Determine API endpoint and form data based on service type
      switch (serviceType) {
        case 'police_clearance':
          apiEndpoint = 'http://127.0.0.1:8000/api/police-clearance';
          formData = { 
            name: formData.fullName,
            division: formData.policeDivision,
            district: formData.district,
            description: formData.description
           };
          break;
        case 'online_complaints':
          apiEndpoint = 'http://127.0.0.1:8000/api/online-complaints';
          formData = { 
            name: formData.fullName,
            division: formData.policeDivision,
            district: formData.district,
            complaint: formData.description
           };
          break;
        case 'lost_item_report':
          apiEndpoint = 'http://127.0.0.1:8000/api/lost-item-report';
          formData = { 
            name: formData.fullName,
            division: formData.policeDivision,
            district: formData.district,
            item: formData.description,
            description: formData.description
           };
          break;
        default:
          break;
      }
      // Send request to the determined API endpoint
      const response = await axios.post(apiEndpoint, formData, {
        headers: {
          'Authorization': 'Bearer ${token}'
        }
      });
      console.log('Response from API:', response.data);
      // Optionally, reset the form data after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
    }
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
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Police Division:
            <input type="text" name="policeDivision" value={formData.policeDivision} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            District:
            <input type="text" name="district" value={formData.district} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleInputChange} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      {serviceType === 'online_complaints' && (
        <form onSubmit={handleSubmit}>
          <h2>Online Complaints</h2>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Police Division:
            <input type="text" name="policeDivision" value={formData.policeDivision} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            District:
            <input type="text" name="district" value={formData.district} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleInputChange} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      {serviceType === 'lost_item_report' && (
        <form onSubmit={handleSubmit}>
          <h2>Lost Item Report</h2>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Police Division:
            <input type="text" name="policeDivision" value={formData.policeDivision} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            District:
            <input type="text" name="district" value={formData.district} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Item Name:
            <input type="text" name="itemName" value={formData.itemName} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleInputChange} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default EServicePage;
