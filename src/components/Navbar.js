import React, { useEffect } from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';


export default function Navbar() {
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
          <button className="navbar-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className="navbar-menu">
            <li><Link className="a" to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link className="a" to="/Resume" onClick={closeSidebar}>Resume</Link></li>
            <li><Link className="a" to="/Projects" onClick={closeSidebar}>Projects</Link></li>
            <li><Link className="a" to="/Contact" onClick={closeSidebar}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


