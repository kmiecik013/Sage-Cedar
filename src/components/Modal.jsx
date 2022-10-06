import "../styles/modal.css";
import ReactDom from 'react-dom'
import { GrClose } from "react-icons/gr";


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FEFFDE',
  padding: '100px',
  zIndex: 1000,
  borderRadius:'5px',


}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null
    return ReactDom.createPortal(
      <>
      <div style={OVERLAY_STYLES} />
      <div className="model-styles">
        <button onClick={onClose}
                className="x-botton"><GrClose /></button>
        <div className="important-content">
        <h1 className="crisis-title">Call Centers </h1>
        <div className="distres-box">
        <div className="crisis-option">
          <h1 className="distress-title">Distress Center</h1>
          <h1 className="distress-number"> 1-403-266-1601 </h1>
          </div>
          <div className="crisis-option">
          <h1 className="distress-title">Hope For Wellness Help</h1>
          <h1 className="distress-number"> 11-855-242-3310 </h1>
          </div>
          <div className="crisis-option">
          <h1 className="distress-title">National Indian Residential School Crisis</h1>
          <h1 className="distress-number">1-866-925-4419</h1>
          </div>
        </div>
        {children}
        </div>
      </div>
      </>,
      document.getElementById('portal')
  
    );
  }
