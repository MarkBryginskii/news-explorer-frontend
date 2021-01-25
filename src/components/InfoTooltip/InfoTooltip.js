import { React, useEffect, useCallback } from 'react';
import './InfoTooltip.css';

const InfoTooltip = (props) => {

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
    <div id="infoTooltip" className={`info-tooltip ${props.isOpen && 'info-tooltip_opened' }`}>
      <div className="info-tooltip__container">
        <button onClick={props.onClose} type="reset" className="info-tooltip__close-button" value="" />
        <h2 className="info-tooltip__title">Пользователь успешно зарегистрирован!</h2>
        <button onClick={props.formSwitcher} type="button" className="info-tooltip__text-link">Войти</button>
      </div>
    </div>
  );
}

export default InfoTooltip;
