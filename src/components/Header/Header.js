import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {

  return (
    <header className={`header header_${props.theme}`}>
    <div className="header-container">
      <Link className={`header__logo header__logo_${props.theme}`} to='/'>NewsExplorer</Link>
      <div className="header__nav-bar">
        <Navigation theme={props.theme} isLoggedIn={props.isLoggedIn} currentUser={props.currentUser} formSwitcher={props.formSwitcher}/>
      </div>
      <button
        className={`header__nav-button ${props.isNavPopupOpen && 'header__nav-button_opened' } header__nav-button_${props.theme}`}
        type="button"
        onClick={props.handleNavButtonClick}
      />
    </div>
  </header>);
}

export default Header;
