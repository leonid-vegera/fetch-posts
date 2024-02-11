import React from 'react';
import './Loader.scss';

export const Loader = () => (
  <div className="lds-container">
    <h2 className="lds-title">Data is loading...</h2>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
