import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = (props) => {

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Сохранённые статьи</p>
        <h2 className="saved-news-header__title">Грета, у вас 5 сохранённых статей</h2>
        <p className="saved-news-header__keywords">По ключевым словам: <span className="saved-news-header__keyword">Природа, Тайга</span> и <span className="saved-news-header__keyword">2-м другим</span></p>
      </div>
    </section>);
}

export default SavedNewsHeader;
