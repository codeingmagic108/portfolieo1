import React from 'react'
import contacts from './contacts.css';
import Footer from './Footer';


export default function Contacts() {
  return (
    <div>
      <div class='outer1'>
        <div class='inner1'>
          <from>
            <label for='firstname'>First Name<sup>*</sup></label><br/><input id='firstname' type='text' placeholder=''></input><br/>
          <label for='middlename'>Middle Name</label><br/><input id='middlename' type='text' placeholder=''></input><br/>
          <label for='lastname' >Last Name</label><br/><input id='lastname' type='text' placeholder=''></input><br/>
          <label for='Email'>Email<sup>*</sup></label><br/><input id='Email'  type='email' ></input><br/>
          <label for='phone'>Phone<sup>*</sup></label><br/><input id='phone' type='tel'  maxLength={10} ></input><br/>
          <label for='message'>Message</label><br/><textarea id='message' rows='5' placeholder='Hello........'></textarea><br/>
          <button type='button' >Send</button>
          </from>

        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
