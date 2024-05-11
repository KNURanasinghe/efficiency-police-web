  import React, { useState } from 'react';
  import { Link, useHistory } from 'react-router-dom';
  import logo from '../assets/logo.png';
  import './header.css';

  function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();

    const pages = [
      { 
        name: 'Home', 
        path: '/'
      },
      { 
        name: 'The Department', 
        path: '/department',
        keywords: ['police department', 'mission', 'history', 'executive team', 'inspector general']
      },
      { 
        name: 'Careers', 
        path: '/career',
        keywords: ['overview', 'career opportunities', 'eligibility', 'hiring']
      },
      // Add other pages with their associated keywords
      { 
        name: 'Media Center', 
        path: '/media-center',
        keywords: ['news', 'events', 'gallery']
      },
      { 
        name: 'Contact Us', 
        path: '/contact',
        keywords: ['contact information', 'location', 'email', 'phone']
      }
    ];

    const getContent = (searchTerm) => {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      
      const matchedPages = pages.filter(page =>
        page.name.toLowerCase().includes(normalizedSearchTerm) ||
        (page.keywords && page.keywords.some(keyword => keyword.includes(normalizedSearchTerm)))
      );

      return matchedPages;
    };

    const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);
    
      if (searchTerm.trim() !== '') {
        const matchedPages = getContent(searchTerm);
        setSuggestions(matchedPages);
    
        // Add or remove classes based on the number of suggestions
        const suggestionBox = document.querySelector('.search-suggestions');
        if (matchedPages.length === 1) {
          suggestionBox.classList.add('one-suggestion');
          suggestionBox.classList.remove('two-suggestions', 'three-suggestions','four-suggestions');
        } else if (matchedPages.length === 2) {
          suggestionBox.classList.add('two-suggestions');
          suggestionBox.classList.remove('one-suggestion', 'three-suggestions','four-suggestions');
        } else if (matchedPages.length === 3) {
          suggestionBox.classList.add('three-suggestions');
          suggestionBox.classList.remove('one-suggestion', 'two-suggestions','four-suggestions');
        }  else if (matchedPages.length === 4) {
          suggestionBox.classList.add('four-suggestions');
          suggestionBox.classList.remove('one-suggestion', 'two-suggestions','three-suggestions');
        } else {
          // Handle other cases if needed
        }
      } else {
        setSuggestions([]);
        // Reset classes when there are no suggestions
        const suggestionBox = document.querySelector('.search-suggestions');
        suggestionBox.classList.remove('one-suggestion', 'two-suggestions', 'three-suggestions','four-suggestions');
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/department">The Department</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
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
              onChange={(e) => handleSearch(e.target.value)} 
            />
            {searchTerm && (
              <button className="clear-button" onClick={clearSearch}>X</button>
            )}
            <button type="button" onClick={() => handleSearch(searchTerm)}>Search</button>
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
