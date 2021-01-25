import React from 'react';
import './NavPopup.css';
import Navigation from '../Navigation/Navigation';

const NavPopup = (props) => {

  return (
    <div id="navPopup" className={`nav-popup ${props.isNavPopupOpen && 'nav-popup_opened' }`}>
      <div className="nav-popup__container">
        <Navigation theme={props.theme} isLoggedIn={props.isLoggedIn} onClose={props.onClose} formSwitcher={props.formSwitcher}/>
      </div>
    </div>
  );
}

export default NavPopup;
