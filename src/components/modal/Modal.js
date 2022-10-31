import React from "react";
import "./modal.css";
import x from '../../images/exit_icon.svg';
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          
        </section>
        <img src ={x} alt = "x" className="modal-button" onClick={handleClose}></img> 
      </div>
    );
  };
  export default Modal;
