import React, { useState } from 'react';
import './signin.css';

function SignIn() {
  // State to store form data
  const [formData, setFormData] = useState({
    permanentAddress: '',
    residentialAddress: '',
    contactHome: '',
    contactPersonal1: '',
    contactPersonal2: '',
    email: '',
    district: '',
    fullName: '',
    nameWithInitials: '',
    nic: '',
    passport: '',
    drivingLicense: '',
    age: '',
    maritalStatus: '',
    policeDomain: '',
    gramasewakaArea: '',
    scannedNic: null,
    scannedBirthCertificate: null,
    recentPhotograph: null
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (e.g., sending data to backend)
    console.log(formData);
  };

  return (
    <div className="sign-in-container">
      <h1>Welcome to SLPD</h1>
      <h2>Create your profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-column">
          <label>Please add a District:</label>
          <select name="district" value={formData.district} onChange={handleChange}>
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
          {/* Add other form fields for the first column */}
          {/* For example: */}
          <label>Permanent Address:</label>
          <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
          {/* Add more form fields here */}
        </div>
        <div className="form-column">
          {/* Add form fields for the second column */}
          {/* For example: */}
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {/* Add more form fields here */}
        </div>
        <div className="form-row">
          {/* Add form fields spanning both columns */}
          {/* For example: */}
          <label>Please add Maritial State:</label>
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
            <option value="">Select Marital Status</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
          </select>
          {/* Add more form fields spanning both columns */}
        </div>
        <div className="form-row">
          {/* Add file input fields for uploading documents */}
          {/* For example: */}
          <input type="file" name="scannedNic" onChange={handleChange} />
          <label>Upload your scanned NIC copy:</label>
          {/* Add more file input fields here */}
        </div>
        <div className="form-row">
          {/* Add buttons for form submission and cancellation */}
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

// Districts list
const districts = [
  'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota',
  'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara',
  'Monaragala', 'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee'
];

export default SignIn;
