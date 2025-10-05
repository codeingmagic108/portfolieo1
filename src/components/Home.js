import React from 'react'
import home from './home.css';
import img1 from './dheeraj.png'
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
               <span class='typeing-text'>
                <span>web developer...</span>
               </span>
               </div><br/>
            <span class='btn'>
            <button class='bt1' type='submit' name='resume'><Link to='/Resume'>Resume</Link></button>
            <button class='bt2' type='submit' name='projects' ><Link to='/Projects'>Projects</Link></button>
            <button class='bt3' type='submit' name='contact'><Link to='Contact'>Contacts</Link></button>
       
            </span>
             </span>
        <span class='right'>
          <img src={img1} alt="dheeraj kumar"></img>
        </span>
      </div>
    </div>
  )
}
