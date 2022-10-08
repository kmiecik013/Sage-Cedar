import "../../styles/modals/modal1.css";
import ReactDom from 'react-dom'
import { GrClose } from "react-icons/gr";
import cards from "../Cards";
import lady from "../../images/lady2.jpg";



const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function ModalId1({ open, children, onClose}) {



  if (!open) return null
    return ReactDom.createPortal(
      <>
      <div style={OVERLAY_STYLES} />
      <div className="model-id-style"> 
      <img src={lady} alt=""
              className="modal-image"/>
          <button onClick={onClose}
                  className="x-bottonID"><GrClose /></button>
        
      
  
        <div className="important-contentID">
      <h1 className="modal-title">Individual session</h1>  
        
        
        <p className="modal-description">Individual art therapy sessions are great for those who need the time and space to process their thoughts, feelings, and emotions with the one-on-one support of the art therapist.
This can lead to in-depth personal insights and resolution.</p>
<p className="modal-description">Individual art therapy sessions are great for those who need the time and space to process their thoughts, feelings, and emotions with the one-on-one support of the art therapist.
This can lead to in-depth personal insights and resolution.</p>
        <p className="modal-price">Price: $1,000,000</p>

{children}

            
              
           

       

      
        </div>
      </div>
      </>,
      document.getElementById('portal')
  
    );
  }
