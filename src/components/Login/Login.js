import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Login = (props) => {

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [validationMessage, setValidationMessage] = React.useState({});

  const handleInputChange = (evt) => {
    setValidationMessage({ ...validationMessage, [evt.target.name]: evt.target.validationMessage.split('. ')[0] });

    if(evt.target.closest('form').checkValidity()) {
        setIsFormValid(true);
      }
      else {
        setIsFormValid(false);
      }
  }

  function formSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });

    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <PopupWithForm name="Login" title="Войти" linkText="Зарегистрироваться" isOpen={props.isOpen} onClose={props.onClose} isFormValid={isFormValid} formSwitcher={props.formSwitcher} submit={formSubmit}>
      <div className="popup__input-container">
        <label className="popup__text-field-lable">Email</label>
        <input onChange={handleInputChange} defaultValue='' ref={emailRef} className="popup__text-field" id="popup__user-email" type='email' name='email' placeholder="Введите почту" required disabled={props.isPopupBlocked}></input>
        <span id="popup__user-email-error" className="popup__input-error">{validationMessage.email}</span>
      </div>
      <div className="popup__input-container">
        <label className="popup__text-field-lable">Пароль</label>
        <input onChange={handleInputChange} defaultValue='' ref={passwordRef} className="popup__text-field" id="popup__user-password" type='password' name='password' placeholder="Введите пароль" minLength='6' required disabled={props.isPopupBlocked}></input>
        <span id="popup__user-password-error" className="popup__input-error">{validationMessage.password}</span>
      </div>
      <span className={`popup__main-error ${props.isAuthFail && 'popup__main-error_visible' }`}>Неправильная почта или пароль</span>
      <button type="submit" onClick={formSubmit} className={`popup__save-button ${!isFormValid && 'popup__save-button_disabled' }`} disabled={!isFormValid}>Войти</button>
    </PopupWithForm>
  );
}

export default Login;
