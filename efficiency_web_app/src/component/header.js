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

  const getContent = (searchTerm) => {
    switch (searchTerm.toLowerCase()) {
      case 'about the police department':
      case 'our mission':
      case 'our history':
      case 'executive team':
      case 'office of inspector general':
        return '/department';
      case 'overview':
      case 'career opportunities':
      case 'eligibility & hiring in the sri lanka police department':
        return '/career';
      default:
        return '';
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm.trim() !== '') {
      const path = getContent(searchTerm);
      if (path) {
        setSuggestions([{ name: searchTerm, path }]);
      } else {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleRoute = (path) => {
    history.push(path);
    clearSearch();
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
          {pages.map(page => (
            <li key={page.path}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => handleSearch(e.target.value)} 
          />
          {searchTerm && (
            <button className="clear-button" onClick={clearSearch}>X</button>
          )}
          <button type="button">Search</button>
        </div>
      </nav>
      <div className="search-suggestions">
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map(page => (
              <li key={page.path}>
                <Link to={page.path} onClick={() => handleRoute(page.path)}>{page.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
