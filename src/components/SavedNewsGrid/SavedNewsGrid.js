import React from 'react';
import './SavedNewsGrid.css';
import NewsCardList from '../NewsCardList/NewsCardList';

const SavedNewsGrid = (props) => {

  return (
    <section className="saved-news-grid">
      <div className="saved-news-grid__container">
        <NewsCardList isLoggedIn={props.isLoggedIn}/>
      </div>
    </section>);
}

export default SavedNewsGrid;
