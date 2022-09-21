
import { useState, useEffect } from 'react'
import sageCedar from "../images/logo.png";
import '../styles/sctitle.css';
import TaylorTitle from "./TaylorTitle"



export default function SCtitle(props) {

  return (
    <div>
      
      <div className="sc-home-title">
        <img className="home-img" src={sageCedar} />
      
      </div>
    </div>
  );
}


