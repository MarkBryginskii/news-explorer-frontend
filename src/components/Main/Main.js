import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

const Main = (props) => {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <SearchForm onSubmit={props.onSubmit}/>
      <SearchResult
        shownNews={props.shownNews}
        saveArticle={props.saveArticle}
        isPreloaderActive={props.isPreloaderActive}
        noSearchResults={props.noSearchResults}
        handleShowMore={props.handleShowMore}
        isResultVisible={props.isResultVisible}
        isLoggedIn={props.isLoggedIn}
        isShowMoreBtnActive={props.isShowMoreBtnActive}/>
      <About />
    </main>
    );
}

export default Main;
