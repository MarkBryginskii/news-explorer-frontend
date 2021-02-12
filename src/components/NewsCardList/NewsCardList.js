import React from 'react';
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = (props) => {

  return (
    <ul className="news-cards">
      {props.newsData && props.newsData.map((newsCard, _id) => <NewsCard key={_id} {...newsCard} saveArticle={props.saveArticle} deleteArticle={props.deleteArticle} isLoggedIn={props.isLoggedIn}/>)}
    </ul>);
}

export default NewsCardList;
