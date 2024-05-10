// Header.js

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'The Department', path: '/department' },
    { name: 'Careers', path: '/career' },
    { name: 'Media Center', path: '/media-center' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Check if the search term matches any page name
      const matchedPage = pages.find(page =>
        page.name.toLowerCase() === searchTerm.toLowerCase()
      );

      if (matchedPage) {
        // If there's a direct match, navigate to the page
        history.push(matchedPage.path);
      } else {
        // If no direct match, suggest possible matches to the user
        const suggestedPages = pages.filter(page =>
          page.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(suggestedPages);
      }

      // Clear the search input after searching
      setSearchTerm('');
    }
  };

  return (
    <header>
      <div className="logo-and-title-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1 className="title">EFFICIENCYXCEL SL</h1>
      </div>
      <div className="established">Established</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/department">The Department</Link>
            {/* Dropdown menu for department */}
          </li>
          <li>
            <Link to="/career">Careers</Link>
            {/* Dropdown menu for careers */}
          </li>
          <li>
            <Link to="/media-center">Media Center</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
      </nav>
      {/* Display search suggestions */}
     {/* <div className="search-suggestions">
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map(page => (
              <li key={page.path}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>*/}
    </header>
  );
}

export default Header;
