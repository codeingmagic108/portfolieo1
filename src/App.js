import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
   {/* <Home/> */}
  
   <Router>
    
      <div>
         <Navbar/>
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
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
