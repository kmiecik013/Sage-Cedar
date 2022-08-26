import logo from '../images/SC.png';
import '../NavbartwoStyles.css';


import { TbMenu2 } from "react-icons/tb";
import { ImMenu } from "react-icons/im";
import { GrClose } from "react-icons/gr"




export default function Navbartwo() {
  return (
    <div>
      <nav>
        <a className='left-side-navbar'>
        <img 
          className="navbar-image"
          src= {logo} />
        <h1 className='navbar-title'>Sage and Cedar</h1>
        </a>
        <div>
          <ul className='right-side-nav'>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Art Therapist</a></li>
            <li><a href="index.html">Contact</a></li>
            <li><a href="index.html">Blog</a></li>
          </ul>
        </div>
        <div id="mobile">

          
          <TbMenu2 
            className='hamburger-icon'/>
          
          <GrClose
            className='close-icon' />
          

         

        </div>
      </nav>
    </div>
  );
}