import React from 'react';
import './ThemeModal.css';

const ThemeModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2>Caution: Light mode ahead!</h2>
        <p>Are you sure you want to proceed to the light side?</p>
        <button className="btn btn-primary" onClick={onConfirm}>
          Go Light
        </button>
      </div>
    </div>
  );
};

export default ThemeModal;
