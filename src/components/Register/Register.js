import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Register = (props) => {

  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const nameRef = React.useRef();

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

  function formSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value
    });

    emailRef.current.value = '';
    passwordRef.current.value = '';
    nameRef.current.value = '';
  }

  return (
    <PopupWithForm name="Register" title="Регистрация" linkText="Войти" isOpen={props.isOpen} onClose={props.onClose} isFormValid={isFormValid} formSwitcher={props.formSwitcher}>
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
      <div className="popup__input-container">
        <label className="popup__text-field-lable">Имя</label>
        <input onChange={handleInputChange} defaultValue='' ref={nameRef} className="popup__text-field" id="popup__user-name" type='text' name='name' placeholder="Введите имя" minLength='2' maxLength='20' required disabled={props.isPopupBlocked}></input>
        <span id="popup__user-name-error" className="popup__input-error">{validationMessage.name}</span>
      </div>
      <span className={`popup__main-error ${props.isAuthFail && 'popup__main-error_visible' }`}>Такой пользователь уже есть</span>
      <button type="submit" onClick={formSubmit} className={`popup__save-button ${!isFormValid && 'popup__save-button_disabled' }`} disabled={!isFormValid}>Зарегистрироваться</button>
    </PopupWithForm>
  );
}

export default Register;
