import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Privacypolicy from './components/Privacypolicy';
import Accessiblitystatement from './components/Accessiblitystatement';



function App() {
  return (
   <>
   <Router>
    
      <div>
         <Navbar/>
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
