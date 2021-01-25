import React from 'react';
import './Preloader.css';

const Preloader = (props) => {

  return (
    <i className={`circle-preloader ${props.isPreloaderActive && 'circle-preloader_active'}`}></i>
  );
}

export default Preloader;
