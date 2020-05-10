import React from 'react';
import spinner from '@public/assets/spinner.gif';
import './style.css';

const LoadingSpinner = () => {

  return (
    <div id='spinner'>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default LoadingSpinner;
