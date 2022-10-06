import { useState } from 'react'  
import individual from "../../images/individual.jpeg";
import "../../styles/card.css";
import ModalId3 from "../ModalIds/ModalId3";
import cards from "../Cards";
import art from "../../images/art.jpeg"

export default function CardId1(props) {


  const handleClick = event => {
    console.log(event.currentTarget.id) 
    setIsOpen(true)
  };

  const [isShown, setIsShown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);





  return (
    <div className="card-container">
      <div className="image-container">
        <img src={individual} alt="" />
      </div>
      <div className="card-content">
      <div>
        <h2 className="title atw">Art Therapy Workshops</h2>
      </div>
      <div className="description"> 
      
      </div>
      <div className="button-div">
      <button className="more-info-button"
            class={props.title}
            key={props.id}
            id= {props.id}
            onClick= {handleClick} >More Info</button>
       <ModalId3
       open={isOpen} onClose={()=> setIsOpen(false)}>
        </ModalId3>
      </div>
      </div>
    </div>
    
  );
}
