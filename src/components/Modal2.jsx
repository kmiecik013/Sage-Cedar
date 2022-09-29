
import ReactDom from 'react-dom'
import { GrClose } from "react-icons/gr";
import Card from "./Card";
import cards from "./Cards";
import Card2 from "./Card2";



const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FEFFDE',
  padding: '300px',
  zIndex: 1000,
  borderRadius:'20px',


}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .5)',
  zIndex: 1000
}

export default function Modal2({ open, children, onClose, handleClick}) {

  function createCard(cards) {
   {
    return <Card2
    id = {cards.id}
    key={cards.id}
    title={cards.title}
    body={cards.body}
    />
    }
  }


  if (!open) return null
    return ReactDom.createPortal(
      <>
      <div style={OVERLAY_STYLES} />
      <div className="model-styles">
        <button onClick={onClose}
                className="x-botton"><GrClose /></button>
        <div className="important-content">
    
        <h1> Hello </h1>
        <h2>I'm heere</h2>
        {handleClick}

            
              
           

       

        {children}
        </div>
      </div>
      </>,
      document.getElementById('portal')
  
    );
  }
