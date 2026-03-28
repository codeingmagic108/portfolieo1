import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Privacypolicy from './components/Privacypolicy';
import Accessiblitystatement from './components/Accessiblitystatement';
import CursorTrail from './CursorTrail';



function App() {
  // Persist dark mode in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
   <>
   <Router>
      <CursorTrail />
    
      <div>
         <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path='/Privacypolicy' element={<Privacypolicy/>} />
        <Route path='/Accessiblitystatement' element={<Accessiblitystatement/>} />
        
      </Routes>
      <div>
         <Footer/>
      </div>

   </Router>
    
   </>
  );
}

export default App;
