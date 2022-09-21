import { useState } from 'react'  
import individual from "../images/individual.jpeg";
import "../styles/card.css";
import Modal2 from "./Modal2";
import cards from "./Cards";


export default function Card2(props) {




  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="card-content">
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="description"> 
        <p>{props.body}</p>
      </div>
    </div>
     
    </div>
    
  );
}