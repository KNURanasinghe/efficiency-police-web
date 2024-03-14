import React, { useState } from 'react';
import './eservice.css';
import axios from 'axios';

function EServicePage() {
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    policeDivision: '',
    district: '',
    itemName: '', // Only for lost_item_report
    description: '',
  });

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

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
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', formData);
      console.log('Response from API:', response.data);
      // Optionally, you can reset the form data after successful submission
      setFormData({
        fullName: '',
        policeDivision: '',
        district: '',
        itemName: '',
        description: '',
      });
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
            <button onClick={() => setServiceType('police_clearance')}>Police Clearance</button>
          </li>
          <li>
            <button onClick={() => setServiceType('online_complaints')}>Online Complaints</button>
          </li>
          <li>
            <button onClick={() => setServiceType('lost_item_report')}>Lost Mobile</button>
          </li>
        </ul>
      </nav>
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
