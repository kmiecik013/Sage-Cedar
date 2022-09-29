import { useState } from 'react'  
import Davies from "../../images/Davies.jpeg";
import "../../styles/card.css";
import ModalId4 from "../ModalIds/ModalId4";
import cards from "../Cards";

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
        <img src={Davies} alt="" />
      </div>
      <div className="card-content">
      <div >
        <h2 className="title">Team Building</h2>
      </div>
      <div className="description"> 
        <p>"Hello I'm here" </p>
      </div>
      <div>
      <button className="more-info-button"
            class={props.title}
            key={props.id}
            id= {props.id}
            onClick= {handleClick} >More Info...</button>
       <ModalId4
       open={isOpen} onClose={()=> setIsOpen(false)}>
        </ModalId4>
      </div>
      </div>
    </div>
    
  );
}
