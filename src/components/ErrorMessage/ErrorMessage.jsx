import React from 'react';
import './ErrorMessage.scss';
import { PiWarningOctagonFill } from "react-icons/pi";

export const ErrorMessage = ({ error }) => (
  <div className="error-message">
    <div className="error-message__icon">
      <PiWarningOctagonFill/>
    </div>
    <p className="error-message__text">
      Error occurred! Error code: {error.status}<br/>
      Please try again later
    </p>
  </div>
);
