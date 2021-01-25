import React from 'react';
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = () => {

  return (
    <ul className="news-cards">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul>);
}

export default NewsCardList;
