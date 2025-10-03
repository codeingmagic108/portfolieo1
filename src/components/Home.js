import React from 'react'
import home from './home.css';

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
            <button class='bt1' type='submit' name='resume'>Resume</button>
            <button class='bt2' type='submit' name='projects' >Projects</button>
            <button class='bt3' type='submit' name='contact'>Contacts</button>
       
            </span>
             </span>
        <span class='right'>
          <img src='https://www.bing.com/th/id/OIP.na449fIsK7r2Iftg2_TP5wHaGr?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt='dheeraj kumar'></img>
        </span>
      </div>
    </div>
  )
}
