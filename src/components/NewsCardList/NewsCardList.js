import React from 'react';
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";
import NewsCardsData from "../../data/NewsCardsData.json";

const NewsCardList = () => {

  return (
    <ul className="news-cards">
      {NewsCardsData.map(card => <NewsCard {...card}/>)}
    </ul>);
}

export default NewsCardList;
