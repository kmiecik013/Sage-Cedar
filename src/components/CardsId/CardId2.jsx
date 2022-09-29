import { useState } from 'react'  
import individual from "../../images/individual.jpeg";
import "../../styles/card.css";
import ModalId2 from "../ModalIds/ModalId2";
import cards from "../Cards";
import group from '../../images/group.jpeg';

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
        <img src={group} alt="" />
      </div>
      <div className="card-content">
      <div >
        <h2 className="title">Group</h2>
      </div>
      <div className="description"> 
        <p>"This is group" </p>
      </div>
      <div>
      <button className="more-info-button"
            class={props.title}
            key={props.id}
            id= {props.id}
            onClick= {handleClick} >More Info...</button>
       <ModalId2
       open={isOpen} onClose={()=> setIsOpen(false)}>
        </ModalId2>
      </div>
      </div>
    </div>
    
  );
}
