import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const NewsCard = (props) => {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <li className="news-card">
      <Switch>
        <Route exact path="/">
          <button className="news-card__button news-card__save-icon" type="button">
            <div className="news-card__button-tooltip">
              <p className="news-card__button-tooltip-text">{props.isLoggedIn ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}</p>
            </div>
          </button>
        </Route>
        <Route exact path="/saved-news">
          <div className="news-card__categoty">
            <p className="news-card__categoty-text">{props.keyword}</p>
          </div>
          <button className="news-card__button news-card__trash-icon" type="button">
            <div className="news-card__button-tooltip">
              <p className="news-card__button-tooltip-text">Убрать из сохранённых</p>
            </div>
          </button>
        </Route>
      </Switch>
      <img className="news-card__image" src={props.image} alt={props.title}/>
      <div className="news-card__footer">
        <a href={props.link} className="news-card__link" target="_blank">
          <time className="news-card__date">{props.date}</time>
          <h3 className="news-card__title">{props.title}</h3>
          <article className="news-card__article">{props.text}</article>
          <p className="news-card__source">{props.source}</p>
        </a>
      </div>
    </li>);
}

export default NewsCard;
