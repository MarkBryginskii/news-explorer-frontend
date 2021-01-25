import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNewsGrid from '../SavedNewsGrid/SavedNewsGrid';

const SavedNews = (props) => {

  return (
    <main className="saved-news">
      <SavedNewsHeader />
      <SavedNewsGrid isLoggedIn={props.isLoggedIn}/>
    </main>);
}

export default SavedNews;
