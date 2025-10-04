import React, { useEffect } from 'react'
import navbar from './navbar.css';
import {Link} from 'react-router-dom';


export default function () {
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

  return (
    <div>
      <nav className='navbar'>
        <div class="navbar-container">
          <a href="" class="navbar-logo">DHEERAJ KUMAR</a>
          <button className="navbar-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className="navbar-menu">
            <li><Link class="a" to="/">Home</Link></li>
            <li><Link class="a" to="/Resume">Resume</Link></li>
            <li><Link class="a" to="/Projects">Projects</Link></li>
            <li><Link class="a" to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
