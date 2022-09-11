
import {useState} from 'react'

import './styles/modal.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';
import Crisis from './components/Crisis';
import Navigationbar from './components/Navbar';
import Taylor from './components/Taylor';
import Button from 'react-bootstrap/Button';
import Home from './components/Home';
import Navbartwo from './components/Navbartwo';
import NavBarThree from './components/NavBarThree';
import Card from './components/Card';
import Sage from './components/Sage';
import ContactInfo from './components/ContactInfo';
import Acknowledgement from './components/Acknowledgement';
import GetHelp from "./components/GetHelp";
import Modal from "./components/Modal"
import Blog from "./components/Blog";
import { Routes, Route } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'




function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div>

  <NavBarThree />

  <Routes>
    <Route path="/blog" element={<Blog />} />
    <Route path="/" element={
    <div>
  
    <Home />

   <Sage />

   <About />

  <Sage />
   <Taylor />

   <Sage />
   <Service />

   <Sage />
   <Contact />
<div className="gethelp-postioning">

    <button className="gethelp-button"
            onClick= {()=>setIsOpen(true)}>Get Help</button>
       <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
        </Modal>
    </div>
   <Acknowledgement />
  <Footer />
</div>} 
  />
  </Routes>
   
  
   
    
   

    


  

    </div>
  );
}

export default App;
