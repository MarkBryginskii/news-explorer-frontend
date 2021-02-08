import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNewsGrid from '../SavedNewsGrid/SavedNewsGrid';

const SavedNews = (props) => {

  return (
    <main className="saved-news">
      <SavedNewsHeader userName={props.userName} newsData={props.savedNews}/>
      <SavedNewsGrid isLoggedIn={props.isLoggedIn} savedNews={props.savedNews} deleteArticle={props.deleteArticle}/>
    </main>);
}

export default SavedNews;
