import React from "react";

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button text-right" onClick={onClose}>×</button>
        <p className="content-area">{content}</p>
      </div>
    </div>
  );
}

export default Modal;