import { useState } from 'react'  
import individual from "../images/individual.jpeg";
import "../styles/card.css";
import Modal2 from "./Modal2";
import cards from "./Cards";

export default function Card(props) {

  const getEvent = event => {
     return event.currentTarget.id.toString()
  }

  const handleClick = event => {
    console.log(event.currentTarget.id) 
    setIsOpen(true)
  };

  const [isShown, setIsShown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);





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
      <div>
      <button className="more-info-button"
            class={props.title}
            key={props.id}
            id= {props.id}
            onClick= {handleClick} >More Info</button>
       <Modal2 
        
       open={isOpen} onClose={()=> setIsOpen(false)}>
        </Modal2>
      </div>
      </div>
    </div>
    
  );
}
