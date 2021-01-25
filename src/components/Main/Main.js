import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';

const Main = (props) => {

  return (
    <main className="content">
      <SearchForm />
      <SearchResult isPreloaderActive={props.isPreloaderActive} isResultVisible={props.isResultVisible} isLoggedIn={props.isLoggedIn}/>
      <About />
    </main>
    );
}

export default Main;
