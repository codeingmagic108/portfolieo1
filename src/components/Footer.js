import React from 'react'
import footer from './footer.css';
import Privacypolicy from './Privacypolicy';
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
                  <li><a href='https://www.linkedin.com/in/codeing-magic-380038252/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrO07WhaoRrqUUHwboBMb3A%3D%3D' target="_blank" ><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href='https://github.com/codeingmagic108' target="_blank" ><i class="fa-brands fa-github"></i></a></li>
                  <li><a href='https://www.facebook.com/' target="_blank" ><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href='https://twitter.com/@DHEERAJKUM18819' target="_blank" ><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href='https://www.instagram.com/dheeraj_kushwaha319' target="_blank" ><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href='https://www.youtube.com/@codeingmagic' target="_blank" ><i class="fa-brands fa-youtube"></i></a></li>
                  
                </ul>
              </div>

            </div>
            <div class='footer-content1'>
              <Link class='footer-a' to='/Privacypolicy'>Privacy Policy</Link><br/>
              <Link class='footer-a' to='/Accessiblitystatement'>Accessiblity Statement</Link>
              <a href='rsume-dhee.pdf' target="_blank" ><button class='footer-a1'>Download Resume</button></a>
            </div>

        </footer>
    </div>
    <div class='copyright'>
      <copyright>© 2025 Dheeraj Kumar. All rights reserved.</copyright>
    </div>
    </div>
  )
}
