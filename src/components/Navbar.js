import React, { useEffect, useState } from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  // Persist dark mode in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored === 'true';
    }
    return false;
  });

  useEffect(() => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    const handleClick = () => {
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    };

    if (navbarToggle) {
      navbarToggle.addEventListener('click', handleClick);
    }

    return () => {
      if (navbarToggle) {
        navbarToggle.removeEventListener('click', handleClick);
      }
    };
  }, []);

  // Apply dark/light mode to body and persist in localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Function to close sidebar
  const closeSidebar = () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarToggle && navbarMenu) {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    }
  };

  return (
    <div>
      <nav className='navbar'>
        <div className="navbar-container">
          <a href="/" className="navbar-logo"><i className="fa-solid fa-user-tie"></i>DHEERAJ KUMAR</a>
          <div style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
            <button
              className="darkmode-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((prev) => !prev)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginRight: '1.2rem',
                fontSize: '1.5rem',
                color: darkMode ? '#fff' : '#222',
                transition: 'color 0.3s',
              }}
            >
              {darkMode ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>
            <ul className="navbar-menu">
              <li><Link className="a" to="/" onClick={closeSidebar}>Home</Link></li>
              <li><Link className="a" to="/Resume" onClick={closeSidebar}>Resume</Link></li>
              <li><Link className="a" to="/Projects" onClick={closeSidebar}>Projects</Link></li>
              <li><Link className="a" to="/Contact" onClick={closeSidebar}>Contact</Link></li>
            </ul>
            <button className="navbar-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}


