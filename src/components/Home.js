import React from 'react'
import './home.css';
import img1 from './dheeraj5.png'

export default function Home() {
  return (
    <div className="about">
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
