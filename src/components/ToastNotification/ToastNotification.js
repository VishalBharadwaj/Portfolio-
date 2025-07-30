import React, { useState, useEffect } from 'react';
import './ToastNotification.css';

const ToastNotification = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="toast-notification show">
      {message}
    </div>
  );
};

export default ToastNotification;
