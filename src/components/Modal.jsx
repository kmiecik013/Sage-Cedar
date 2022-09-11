import "../styles/modal.css";
import ReactDom from 'react-dom'
import { GrClose } from "react-icons/gr";


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

export default function Modal({ open, children, onClose }) {
  if (!open) return null
    return ReactDom.createPortal(
      <>
      <div style={OVERLAY_STYLES} />
      <div className="model-styles">
        <button onClick={onClose}
                className="x-botton"><GrClose /></button>
        <div className="important-content">
        <h1 className="crisis-title">You are never alone </h1>
        <p className="crisis-content"> Call 222 222 2222 for help </p>
        {children}
        </div>
      </div>
      </>,
      document.getElementById('portal')
  
    );
  }
