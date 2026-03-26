import React from 'react'
import './Footer.css';
import './Privacypolicy';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div class='firstouter'>
      <hr class='hrr'/>
     <div class='outer2'>
        <footer class='inner2'>
            <div class='footer-content'>
              <number>+91 7070109201</number>  
              <email>dheerajkumarcpr94@gmail.com</email> 
              <address>St. Andrews Institute of Technlogy & Managment, Gurgaon</address> 
              <div class='socials'>
                <ul>
                  <li><a href='https://www.linkedin.com/in/dheeraj-kumar-380038252' target="_blank" rel="noreferrer" ><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href='https://github.com/codeingmagic108' target="_blank" rel="noreferrer" ><i class="fa-brands fa-github"></i></a></li>
                  <li><a href='https://www.facebook.com/' target="_blank" rel="noreferrer" ><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href='https://twitter.com/@DHEERAJKUM18819' target="_blank" rel="noreferrer" ><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href='https://www.instagram.com/dheeraj_kushwaha319' target="_blank" rel="noreferrer" ><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href='https://www.youtube.com/@codeingmagic' target="_blank" rel="noreferrer" ><i class="fa-brands fa-youtube"></i></a></li>
                  
                </ul>
              </div>

            </div>
            <div class='footer-content1'>
              <Link class='footer-a' to='/Privacypolicy'>Privacy Policy</Link><br/>
              <Link class='footer-a' to='/Accessiblitystatement'>Accessiblity Statement</Link>
              <a href='dheeraj-resume5.pdf' target="_blank" rel="noreferrer" ><button class='footer-a1'>Download Resume</button></a>
            </div>

        </footer>
    </div>
    <div class='copyright'>
      <copyright>© 2025 Dheeraj Kumar. All rights reserved.</copyright>
    </div>
    </div>
  )
}
