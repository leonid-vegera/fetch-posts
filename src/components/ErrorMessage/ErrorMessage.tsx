import React from 'react';
import './ErrorMessage.scss';
import { PiWarningOctagonFill } from "react-icons/pi";

export interface Error {
  status: string | number,
  data?: object,
  error?: string,
}

type Props = {
  error: Error,
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  const errorText: string = error.error
    ? (error.error)
    : (`Error occurred! Error code: ${error.status}`);

  return (
    <div className="error-message">
      <div className="error-message__icon">
        <PiWarningOctagonFill/>
      </div>
      <p className="error-message__text">
        {errorText}!<br/>
        Please try again later
      </p>
    </div>
  )
}

