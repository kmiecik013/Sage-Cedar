import { useState } from 'react'  
import individual from "../images/individual.jpeg";
import "../styles/card.css";

export default function Card(props) {

  const [isShown, setIsShown] = useState(false);
  
  const handleClick = event => {
    setIsShown(current => !current);
  }

  const closeClick = event => {
    setIsShown(current => !current)
  }

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
      <button onClick={handleClick}>More Info</button> 
      {isShown && <SpecificService />}
      </div>
      </div>
    </div>
    
  );
}

function SpecificService() {

 
  return (
    <div>
    <h1>Hello i'm here</h1>
   
    </div>
  )
  }