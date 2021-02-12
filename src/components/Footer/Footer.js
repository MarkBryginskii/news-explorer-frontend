import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import giticon from "../../images/git-icon.svg";
import facebookicon from "../../images/facebook-icon.svg";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
        <nav className="footer__nav-bar">
          <ul className="footer__nav-links">
            <li className="footer__nav-link"><Link className="footer__nav-link-text" to='/'>Главная</Link></li>
            <li className="footer__nav-link"><a href="https://praktikum.yandex.ru/web/" target="_blank" className="footer__nav-link-text">Яндекс.Практикум</a></li>
          </ul>
          <ul className="footer__nav-icons">
            <li className="footer__nav-icon"><a href="https://github.com/MarkBryginskii" target="_blank"><img src={giticon} alt="GitHub" /></a></li>
            <li className="footer__nav-icon"><a href="https://facebook.com" target="_blank"><img src={facebookicon} alt="Facebook" /></a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
