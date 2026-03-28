import React from 'react'
import './home.css';
import img1 from './dheeraj5.png'

export default function Home() {
  // Add dark mode class to about div if body has dark-mode
  const isDark = typeof document !== 'undefined' && document.body.classList.contains('dark-mode');
  return (
    <div className={`about${isDark ? ' dark-mode' : ''}`}>
      <div className="about-box">
        <span className="left">
          <span className="h11">Hello</span><br />
          <span className="h22">I’m Dheeraj</span><br />
          <div className="text">
            Building responsive, user-friendly websites with clean code and creative flair. I'm a passionate
            <span className="typeing-text">web developer...</span>
          </div><br />
        </span>
        <span className="right">
          <img src={img1} alt="dheeraj kumar" />
        </span>
      </div>
    </div>
  );
}
