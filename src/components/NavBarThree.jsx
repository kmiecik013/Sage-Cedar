import React, { useState } from "react";

import "../styles/NavBarThree.css";
import logo from '../images/sage2.png';
import Contact from './Contact'





const NavBarThree = () => {

  const [navbar, setNavBar] =useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [crisis, setCrisis] = useState(false);

  const showCrisis = event => {
      setCrisis(true)
  }



  const changeBackground = () => {

   
    if(window.scrollY >= 200) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <div className={'Navbar'}>
      <div className="nav-logo">
      <img
          href="#home"
          className="navbar-image"
          src= {logo} />
          <a 
            className="nav-title"
            href="/#home">Sage and Cedar Art Therapy</a>
            </div>
      <div
        className={`nav-items ${isOpen && "open"}`}>

          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#therapist">Art Therapist</a>
          <a href="/#service">Services</a>
          <a href="/#contact" className="contact-nav-option">Contact</a>
          <a href="/blog">Blog </a>
          
    
        
        
         
        
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBarThree;