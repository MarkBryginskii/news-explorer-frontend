import React from 'react';
import './SearchResult.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

const SearchResult = (props) => {

  const showMoreClick = (evt) => {
    evt.preventDefault();

    props.handleShowMore();
  }

  return (
  <section className={`search-result ${props.isResultVisible && 'search-result_visible'}`}>
    <div className="search-result__container">
      <h3 className="search-result__title">Результаты поиска</h3>
      <Preloader isPreloaderActive={props.isPreloaderActive}/>
      <p className={`search-result__no-result ${props.noSearchResults && 'search-result__no-result_visible'}`}>Нет подходящих новостей</p>
      <NewsCardList saveArticle={props.saveArticle} newsData={props.shownNews} isLoggedIn={props.isLoggedIn}/>
      <button className="search-result__button" type="button" onClick={showMoreClick}>Показать еще</button>
    </div>
  </section>);
}

export default SearchResult;
