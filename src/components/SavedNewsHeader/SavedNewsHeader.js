import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = (props) => {

  const keywordsArr = props.newsData.map((a) => a.keyword)

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const distinctKeywords = keywordsArr.filter(distinct);

  const keywordSubtitle = () => {

    if (distinctKeywords.length === 0) {

      return;

    } else if (distinctKeywords.length === 1) {

      return(<p className="saved-news-header__keywords">По ключевым словам: <span className="saved-news-header__keyword">{distinctKeywords[0]}</span></p>)

    } else if (distinctKeywords.length === 2) {

      return(<p className="saved-news-header__keywords">По ключевым словам: <span className="saved-news-header__keyword">{distinctKeywords[0]}, {distinctKeywords[1]}</span></p>)

    } else if (distinctKeywords.length > 2) {

      return(<p className="saved-news-header__keywords">По ключевым словам: <span className="saved-news-header__keyword">{distinctKeywords[0]}, {distinctKeywords[1]}</span> и <span className="saved-news-header__keyword">{distinctKeywords.length-2}-м другим</span></p>)

    }
  }

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Сохранённые статьи</p>
        <h2 className="saved-news-header__title">{props.userName}, у вас {props.newsData.length} сохранённых статей</h2>
        <>{keywordSubtitle()}</>
      </div>
    </section>);
}

export default SavedNewsHeader;
