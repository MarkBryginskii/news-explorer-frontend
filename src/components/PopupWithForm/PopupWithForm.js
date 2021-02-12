import { React, useEffect, useCallback } from 'react';
import './PopupWithForm.css';

const PopupWithForm = (props) => {

  const handleEscClose = useCallback((event) => {
    if (event.key === 'Escape') {
      props.onClose();
    }
  });

  const closeByPopupOverlay = useCallback((event) => {
    if(event.target.classList.contains('popup_opened')) {
      props.onClose();
    }
  });

  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("click", closeByPopupOverlay)
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener("click", closeByPopupOverlay)
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [props.isOpen, handleEscClose, closeByPopupOverlay]);

  return (
    <form id={`popup${props.name}`} onSubmit={props.onSubmit} className={`popup ${props.isOpen && 'popup_opened' }`}  noValidate>
      <div className="popup__form-container">
        <button onClick={props.onClose} type="reset" className="popup__close-button" value="" />
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <p className="popup__info-text">или <button onClick={props.formSwitcher} type="button" className="popup__info-text-link">{props.linkText} </button></p>
      </div>
    </form>
  );
}

export default PopupWithForm;
