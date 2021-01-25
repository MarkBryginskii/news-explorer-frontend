import React from 'react';
import './SearchResult.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

const SearchResult = (props) => {

  return (
  <section className={`search-result ${props.isResultVisible && 'search-result_visible'}`}>
    <div className="search-result__container">
      <h3 className="search-result__title">Результаты поиска</h3>
      <Preloader isPreloaderActive={props.isPreloaderActive}/>
      <NewsCardList isLoggedIn={props.isLoggedIn}/>
      <button className="search-result__button" type="button">Показать еще</button>
    </div>
  </section>);
}

export default SearchResult;
