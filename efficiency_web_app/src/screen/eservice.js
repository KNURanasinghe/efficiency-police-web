import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './eservice.css';

// Modal component for login
function LoginModal({ onClose, onSignup, onLogin }) {
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
      const formData1 = new FormData();
      formData1.append('username', formData.username);
      formData1.append('password', formData.password);
      // Send login request to the server
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', formData1);
      localStorage.setItem('access_token', response.data.access_token); // Set access_token in localStorage upon successful login
      onLogin(); // Call onLogin callback to indicate successful login
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: '',
    policeDivision: '',
    district: '',
    itemName: '', // Only for lost_item_report
    description: ''
  });

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('access_token') !== null);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceTypeChange = (type) => {
    if (isLoggedIn) {
      setServiceType(type);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSignup = () => {
    // Redirect to the signup page
    history.push('/signup'); // Navigate to signup page
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowModal(false);
    setServiceType(''); // Reset serviceType after successful login
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let apiEndpoint = ''; // Placeholder for API endpoint
      const formDataToSend = new FormData(); // Placeholder for form data
      // Determine API endpoint and form data based on service type
      switch (serviceType) {
        case 'police_clearance':
          apiEndpoint = 'http://127.0.0.1:8000/api/civilian/request-clearance';
          formDataToSend.append('name', formData.fullName);
          formDataToSend.append('division', formData.policeDivision);
          formDataToSend.append('district', formData.district);
          formDataToSend.append('description', formData.description);
          break;
        case 'online_complaints':
          apiEndpoint = 'http://127.0.0.1:8000/api/civilian/complaint';
          formDataToSend.append('name', formData.fullName);
          formDataToSend.append('division', formData.policeDivision);
          formDataToSend.append('district', formData.district);
          formDataToSend.append('complaint', formData.description);
          break;
        case 'lost_item_report':
          apiEndpoint = 'http://127.0.0.1:8000/api/civilian/lost-item-report';
          formDataToSend.append('name', formData.fullName);
          formDataToSend.append('division', formData.policeDivision);
          formDataToSend.append('district', formData.district);
          formDataToSend.append('item', formData.itemName); // Assuming itemName should be used here
          formDataToSend.append('description', formData.description);
          break;
        default:
          break;
      }
      // Send request to the determined API endpoint
      const response = await axios.post(apiEndpoint, formDataToSend, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}` // Include access_token in the request headers
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

      {showModal && !isLoggedIn && <LoginModal onClose={handleCloseModal} onSignup={handleSignup} onLogin={handleLogin} />}
      
      {/* Render forms based on selected service type only if the user is logged in */}
      {isLoggedIn && serviceType === 'police_clearance' && (
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
      {isLoggedIn && serviceType === 'online_complaints' && (
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
      {isLoggedIn && serviceType === 'lost_item_report' && (
        <form onSubmit={handleSubmit}>
          <h2>Lost Mobile Report</h2>
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
