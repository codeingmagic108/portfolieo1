import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contacts.css';
import  './Footer';


export default function Contacts() {
  const form = useRef();
  const [status, setStatus] = useState('');

  // Hide status after 3 seconds
  React.useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs.sendForm(
      '7070109201dheeraj', // replace with your EmailJS service ID
      'template_whw3f39', // replace with your EmailJS template ID
      form.current,
      'sPVO7G0uW4BeYxbz1' // replace with your EmailJS public key
    )
    .then((result) => {
        setStatus('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        setStatus('Failed to send message.');
    });
  };

  return (
    <div>
      <div className="outer1">
        <div className="inner1" style={{ position: 'relative' }}>
          {status && (
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: 0,
              background: status.includes('success') ? '#d4edda' : '#f8d7da',
              color: status.includes('success') ? '#155724' : '#721c24',
              border: status.includes('success') ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
              borderRadius: '4px',
              padding: '10px 18px',
              minWidth: '180px',
              textAlign: 'center',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
            }}>
              {status}
            </div>
          )}
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor='firstname'>First Name<sup>*</sup></label><br/>
            <input name='firstname' id='firstname' type='text' placeholder='' required /><br/>
            <label htmlFor='middlename'>Middle Name</label><br/>
            <input name='middlename' id='middlename' type='text' placeholder='' /><br/>
            <label htmlFor='lastname'>Last Name</label><br/>
            <input name='lastname' id='lastname' type='text' placeholder='' /><br/>
            <label htmlFor='Email'>Email<sup>*</sup></label><br/>
            <input name='email' id='Email' type='email' required /><br/>
            <label htmlFor='phone'>Phone<sup>*</sup></label><br/>
            <input name='phone' id='phone' type='tel' maxLength={10} /><br/>
            <label htmlFor='message'>Message</label><br/>
            <textarea name='message' id='message' rows='5' placeholder='Hello........' required></textarea><br/>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
