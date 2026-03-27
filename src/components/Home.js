import React from 'react'
import './home.css';
import img1 from './dheeraj5.png'
import{Link} from 'react-router-dom'

export default function Home() {
  return (
    <div class='about'>
      <div class='about-box'>
        <span class='left'>
            <span class='h11'>Hello</span><br/>
            <span class='h22'>I’m Dheeraj</span><br/>
            <div class='text'>Building responsive, user-friendly websites 
              with clean code and creative flair. I'm a passionate
               <span class='typeing-text' style={{ color: '#6c63ff', fontWeight: 600, fontFamily: 'Fira Mono, Consolas, monospace' }}>
                 <span>{typed}</span>
                 <span className="type-cursor" style={{ color: '#6c63ff', fontWeight: 900 }}>|</span>
               </span>
               </div><br/>
             </span>
        <span class='right'>
          <img src={img1} alt="dheeraj kumar"></img>
        </span>
      </div>
    </div>
  )
}
import React, { useState, useEffect } from 'react';
import './home.css';
import img1 from './dheeraj5.png';
import { Link } from 'react-router-dom';

const typingText = 'web developer...';
const [typed, setTyped] = useState('');
const [typingIdx, setTypingIdx] = useState(0);
useEffect(() => {
  if (typingIdx < typingText.length) {
    const timeout = setTimeout(() => {
      setTyped(typed + typingText[typingIdx]);
      setTypingIdx(typingIdx + 1);
    }, 90);
    return () => clearTimeout(timeout);
  } else {
    // Pause, then reset for infinite loop
    const resetTimeout = setTimeout(() => {
      setTyped('');
      setTypingIdx(0);
    }, 1200);
    return () => clearTimeout(resetTimeout);
  }
}, [typed, typingIdx, typingText]);
}
