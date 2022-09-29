import { useState } from 'react'  
import Mini from "../../images/Mini.jpg";
import "../../styles/card.css";
import ModalId5 from "../ModalIds/ModalId5";
import cards from "../Cards";

export default function CardId5(props) {


  const handleClick = event => {
    console.log(event.currentTarget.id) 
    setIsOpen(true)
  };

  const [isShown, setIsShown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);





  return (
    <div className="card-container">
      <div className="image-container">
        <img src={Mini} alt="" />
      </div>
      <div className="card-content">
      <div >
        <h2 className="title">Individual</h2>
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
       <ModalId5
       open={isOpen} onClose={()=> setIsOpen(false)}>
        </ModalId5>
      </div>
      </div>
    </div>
    
  );
}