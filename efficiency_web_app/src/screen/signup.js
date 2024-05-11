// SignInPage.js

import React, { useState } from 'react';
import './signin.css';
import logo from '../assets/logo.png';
import axios from 'axios';
import Footer from '../component/footer';

function SignInPage() {
 
  const [formData, setFormData] = useState({
    permanentAddress: '',
    residentialAddress: '',
    contactHome: '',
    contactPersonal1: '',
    contactPersonal2: '',
    email: '',
    district: '',
    division: '',
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
    recentPhotograph: null,
    password: '' 
  });

    // Sample division data structure, replace it with actual data
    const divisionsByDistrict = {
      "Ampara": ["Addalaichenai", "Akkaraipattu", "Ampara", "Damana", "Dehiattakandiya", "Kalmunai", "Karaitivu", "Lahugala", "Mahaoya", "Nintavur", "Padiyathalawa", "Sammanthurai", "Thirukkovil"],
      "Anuradhapura": ["Anuradhapura", "Eppawala", "Galnewa", "Galenbindunuwewa", "Horowpathana", "Ipalogama", "Kahatagasdigiliya", "Kebithigollewa", "Kekirawa", "Mahavilachchiya", "Medawachchiya", "Nochchiyagama", "Padaviya", "Palagala", "Rajanganaya", "Rambewa", "Thambuttegama", "Thirappane"],
      "Badulla": ["Badulla", "Bandarawela", "Diyatalawa", "Ella", "Hali Ela", "Haldummulla", "Haputale", "Kandaketiya", "Lunugala", "Meegahakiula", "Passara", "Rideemaliyadda", "Soranathota", "Welimada"],
      "Batticaloa": ["Akkaraipattu", "Batticaloa", "Eravur", "Kalawanchikudi", "Kattankudy", "Kiran", "Kokaddichcholai", "Koralai Pattu Central", "Koralai Pattu South", "Koralai Pattu West", "Manmunai North", "Manmunai Pattu", "Manmunai Pattu North", "Manmunai South & Eruvil Pattu", "Paddiruppu", "Porativu Pattu", "Tirukkovil", "Valaichchenai", "Vavunathivu"],
      "Colombo": ["Colombo Central", "Colombo East", "Colombo North", "Colombo South", "Colombo West", "Dehiwala", "Homagama", "Kaduwela", "Kesbewa", "Kolonnawa", "Maharagama", "Moratuwa", "Padukka", "Ratmalana", "Seethawaka", "Sri Jayawardenepura Kotte"],
      "Galle": ["Ambalangoda", "Baddegama", "Bentota", "Bope Poddala", "Elpitiya", "Galle", "Habaraduwa", "Hikkaduwa", "Karandeniya", "Nagoda", "Neluwa", "Thawalama", "Yakkalamulla"],
      "Gampaha": ["Attanagalla", "Biyagama", "Divulapitiya", "Dompe", "Gampaha", "Ja-Ela", "Kelaniya", "Mahara", "Minuwangoda", "Mirigama", "Nittambuwa", "Wattala", "Welimada"],
      "Hambantota": ["Ambalantota", "Angunakolapelessa", "Beliatta", "Hambantota", "Lunugamwehera", "Suriyawewa", "Tangalle", "Tissamaharama", "Walasmulla", "Weeraketiya"],
      "Jaffna": ["Chavakachcheri", "Delft", "Island North", "Island South", "Jaffna", "Karainagar", "Kayts", "Kopay", "Nallur", "Point Pedro", "Valikamam East", "Valikamam North", "Valikamam South", "Valikamam West", "Vadamarachchi East", "Vadamarachchi North", "Vadamarachchi South West", "Vadamarachchi West"],
      "Kalutara": ["Agalawatta", "Bandaragama", "Beruwala", "Bulathsinhala", "Dodangoda", "Horana", "Ingiriya", "Kalutara", "Matugama", "Millaniya", "Palindanuwara", "Panadura", "Walallawita"],
      "Kandy": ["Akurana", "Delthota", "Dolosbage", "Gampola", "Ganga Ihala Korale", "Harispattuwa", "Kandy Four Gravets & Gangawata Korale", "Kundasale", "Medadumbara", "Minipe", "Panvila", "Pasbage Korale", "Pathadumbara", "Thumpane", "Ududumbara", "Udunuwara", "Yatinuwara"],
      "Kegalle": ["Aranayake", "Bulathkohupitiya", "Dehiowita", "Deraniyagala", "Galigamuwa", "Kegalle", "Mawanella", "Ruwanwella", "Warakapola", "Yatiyanthota"],
      "Kilinochchi": ["Kandavalai", "Karachchi", "Kilinochchi", "Pachchilaipalli", "Poonakari"],
      "Kurunegala": ["Alawwa", "Bingiriya", "Galgamuwa", "Ganewatta", "Giribawa", "Ibbagamuwa", "Kuliyapitiya", "Kurunegala", "Maho", "Mallawapitiya", "Nikaweratiya", "Panduwasnuwara", "Pannala", "Polgahawela", "Rasnayakapura", "Wariyapola", "Wewagedara", "Yapahuwa"],
      "Mannar": ["Mannar", "Manthai", "Musali", "Nanaddan", "Nanattan", "Pandarikulam"],
      "Matale": ["Dambulla", "Galewela", "Laggala Pallegama", "Matale", "Naula", "Pallepola", "Rattota", "Sigiriya", "Ukuwela", "Wilgamuwa", "Yatawatta"],
      "Matara": ["Akuressa", "Deniyaya", "Devinuwara", "Hakmana", "Kamburupitiya", "Matara", "Mulatiyana", "Pasgoda", "Pitabeddara", "Thihagoda", "Weligama"],
      "Monaragala": ["Badalkumbura", "Bibile", "Buttala", "Kataragama", "Medagama", "Monaragala", "Sevanagala", "Siyambalanduwa", "Thanamalwila"],
      "Mullaitivu": ["Manthai East", "Maritimepattu", "Oddusuddan", "Puthukudiyiruppu", "Tunukkai", "Vaddakachchi", "Wellankulam"],
      "Nuwara Eliya": ["Hanguranketha", "Kotmale", "Nuwara Eliya", "Walapane"],
      "Polonnaruwa": ["Dimbulagala", "Elahera", "Hingurakgoda", "Lankapura", "Medirigiriya", "Polonnaruwa", "Thamankaduwa", "Welikanda"],
      "Puttalam": ["Anamaduwa", "Chilaw", "Kalpitiya", "Madampe", "Mahakumbukkadawala", "Mahawewa", "Nattandiya", "Wennappuwa"],
      "Ratnapura": ["Ayagama", "Balangoda", "Eheliyagoda", "Elapatha", "Embilipitiya", "Godakawela", "Imbulpe", "Kiriella", "Kolonne", "Nivithigala", "Opanayake", "Pelmadulla", "Ratnapura", "Weligepola"],
      "Trincomalee": ["Kantalai", "Kinniya", "Morawewa", "Mutur", "Seruvila", "Thambalagamuwa", "Trincomalee", "Verugal"]
    };
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register', formData);
      console.log('Form submitted successfully:', response.data);
      // Add any additional logic after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors here
    }
  };

  return (
    <div className="sign-in-page">
       <div className="header">
        <img src={logo} alt="Logo" className="logo" />
      <h2>Welcome to SLPD</h2>
      </div>
      <h3>Create your profile</h3>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row1">
          <div className="form-column">
            <label htmlFor="permanentAddress">Permanent Address:</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
            />
            <label htmlFor="residentialAddress">Residential Address:</label>
            <input
              type="text"
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleChange}
            />
            <label htmlFor="contactHome">Contact information - Home:</label>
            <input
              type="text"
              name="contactHome"
              value={formData.contactHome}
              onChange={handleChange}
            />
            <label htmlFor="contactPersonal1">Contact information - Personal 1:</label>
            <input
              type="text"
              name="contactPersonal1"
              value={formData.contactPersonal1}
              onChange={handleChange}
            />
            <label htmlFor="contactPersonal2">Contact information - Personal 2:</label>
            <input
              type="text"
              name="contactPersonal2"
              value={formData.contactPersonal2}
              onChange={handleChange}
            />
            <label htmlFor="email">E-Mail Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="district">District:</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
            >
              <option value="">Please select district</option>
              <option value="Ampara">Ampara</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Badulla">Badulla</option>
              <option value="Batticaloa">Batticaloa</option>
              <option value="Colombo">Colombo</option>
              <option value="Galle">Galle</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Hambantota">Hambantota</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Kandy">Kandy</option>
              <option value="Kegalle">Kegalle</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Mannar">Mannar</option>
              <option value="Matale">Matale</option>
              <option value="Matara">Matara</option>
              <option value="Monaragala">Monaragala</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Nuwara Eliya">Nuwara Eliya</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Puttalam">Puttalam</option>
              <option value="Ratnapura">Ratnapura</option>
              <option value="Trincomalee">Trincomalee</option>
            </select>
            <label htmlFor="division">Division:</label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                disabled={!formData.district} // Disable if no district selected
              >
                <option value="">Please select division</option>
                {formData.district && divisionsByDistrict[formData.district].map((division, index) => (
                  <option key={index} value={division}>{division}</option>
                ))}
              </select>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <label htmlFor="nameWithInitials">Name with initials:</label>
            <input
              type="text"
              name="nameWithInitials"
              value={formData.nameWithInitials}
              onChange={handleChange}
            />
            
          </div>
          <div className="form-column">
          <label htmlFor="nic">NIC:</label>
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
            />
            <label htmlFor="passport">Passport (Optional):</label>
            <input
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
            />
            <label htmlFor="drivingLicense">Driving License (Optional):</label>
            <input
              type="text"
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleChange}
            />
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <label htmlFor="maritalStatus">Marital Status:</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Please select marital status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
            <label htmlFor="policeDomain">Police Domain:</label>
            <input
              type="text"
              name="policeDomain"
              value={formData.policeDomain}
              onChange={handleChange}
            />
            <label htmlFor="gramasewakaArea">Gramasewaka Area:</label>
            <input
              type="text"
              name="gramasewakaArea"
              value={formData.gramasewakaArea}
              onChange={handleChange}
            />
             <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="scannedNic">Upload your scanned NIC copy:</label>
            <input
              type="file"
              name="scannedNic"
              onChange={handleFileChange}
            />
            <label htmlFor="scannedBirthCertificate">Upload your scanned Birth certificate:</label>
            <input
              type="file"
              name="scannedBirthCertificate"
              onChange={handleFileChange}
            />
            <label htmlFor="recentPhotograph">Upload your recent photograph:</label>
            <input
              type="file"
              name="recentPhotograph"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="form-row">
        <div className="button-container">
  <button type="submit">Create</button>
  <button type="button">Cancel</button>
</div>
        </div>
      </form>
      
      </div>
      
    </div>
    
  );
}

export default SignInPage;
