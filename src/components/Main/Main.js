import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';

const Main = (props) => {

  return (
    <main className="content">
      <SearchForm onSubmit={props.onSubmit}/>
      <SearchResult shownNews={props.shownNews} saveArticle={props.saveArticle} isPreloaderActive={props.isPreloaderActive} noSearchResults={props.noSearchResults} handleShowMore={props.handleShowMore} isResultVisible={props.isResultVisible} isLoggedIn={props.isLoggedIn}/>
      <About />
    </main>
    );
}

export default Main;
