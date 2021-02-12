import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {

  const searchRef = React.useRef();

  function formSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      keyword: searchRef.current.value
    });
  }

  return (
  <section className="search-form">
    <div className="search-form__container">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <h3 className="search-form__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
      <form className="search-form__search-area" noValidate>
        <input className="search-form__input" ref={searchRef} type="text" defaultValue='' id="search-field" placeholder="Введите тему новости" required />
        <button className="search-form__button" type="submit" onClick={formSubmit}>Искать</button>
      </form>
    </div>
  </section>);
}

export default SearchForm;
