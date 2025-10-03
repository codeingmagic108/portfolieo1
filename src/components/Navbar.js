import React from 'react'
import navbar from './navbar.css';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contacts from './Contacts';

import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav>
        <input id='check' type='checkbox' name='menu' value=''/>
        <label for='check' id='checkbtn'><i class="fa-solid fa-bars"></i></label>
        <label for='check' id='crossbtn'><i class="fa-solid fa-xmark"></i></label>
        <label class='name'><i class="fa-solid fa-user-tie"></i>DHEERAJ KUMAR</label>
                <ul>
                  <li><Link class='Link' to={"/"}>Home</Link></li>
                  <li ><p>|</p></li>
                  <li><Link class='Link' to={"/Resume"}>Resume</Link></li>
                  <li ><p>|</p></li>
                  <li><Link  class='Link'to={"/Projects"}>Projects</Link></li>
                  <li ><p>|</p></li>
                  <li><Link class='Link' to={"/Contacts"}>Contacts</Link></li>
                </ul>
      </nav>
    </div>
  )
}
