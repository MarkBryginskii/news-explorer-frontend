import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import LogoffIconWhite from '../../images/logoff-icon-white.svg';
import LogoffIconDark from '../../images/logoff-icon-dark.svg';

const Navigation = (props) => {

  return (
    <nav className={`nav-bar nav-bar_${props.theme}`} >
      <ul className="nav-bar__list">
        <li className="nav-bar__list-item"><NavLink exact to='/' className="nav-bar__link" activeClassName="nav-bar__link_active" onClick={props.onClose}>Главная</NavLink></li>
        {props.isLoggedIn && (<li className="nav-bar__list-item"><NavLink exact to='/saved-news' className="nav-bar__link" activeClassName="nav-bar__link_active" onClick={props.onClose}>Сохранённые статьи</NavLink></li>)}
      </ul>
    <button
      className="nav-bar__auth-button"
      type="button"
      onClick={props.isLoggedIn ? props.onLogoff : props.formSwitcher}>
        {props.isLoggedIn ? props.userName : 'Авторизоваться'}
        {props.isLoggedIn && <img className='nav-bar__logoff-icon' src={props.theme === 'white' ? LogoffIconWhite : LogoffIconDark} alt='logoff'/>}
      </button>
  </nav>);
}

export default Navigation;
