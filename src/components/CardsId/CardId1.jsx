import { useState } from 'react'  
import tipi from "../../images/tipi.jpg";
import "../../styles/card.css";
import ModalId1 from "../ModalIds/ModalId1";
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
        <img src={tipi} alt="" />
      </div>
      <div className="card-content">
      <div>
        <h2 className="title" >Individual Session</h2>
      </div>
      <div className="description"> 
    
      </div>
      <div className="button-div">
      <button className="more-info-button"
            class={props.title}
            key={props.id}
            id= {props.id}
            onClick= {handleClick} >More Info</button>
       <ModalId1
       open={isOpen} onClose={()=> setIsOpen(false)}>
        </ModalId1>
      </div>
      </div>
    </div>
    
  );
}
