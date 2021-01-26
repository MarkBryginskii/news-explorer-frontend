import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './NewsCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const NewsCard = (props) => {

  const currentUser = React.useContext(CurrentUserContext);

  const [isCardTooltipVisible, setIsCardTooltipVisible] = React.useState(false);

  const handleMouseHover = () => {
    setIsCardTooltipVisible(!isCardTooltipVisible);
  }

  return (
    <li className="news-card">
      <Switch>
        <Route exact path="/">
          <div className={`news-card__button-tooltip ${isCardTooltipVisible && 'news-card__button-tooltip_active'}`}>
            <p className="news-card__button-tooltip-text">{props.isLoggedIn ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}</p>
          </div>
          <button className="news-card__button news-card__save-icon" type="button" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}></button>
        </Route>
        <Route exact path="/saved-news">
          <div className="news-card__categoty">
            <p className="news-card__categoty-text">{props.keyword}</p>
          </div>
          <div className={`news-card__button-tooltip ${isCardTooltipVisible && 'news-card__button-tooltip_active'}`}>
            <p className="news-card__button-tooltip-text">Убрать из сохранённых</p>
          </div>
          <button className="news-card__button news-card__trash-icon" type="button" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}></button>
        </Route>
      </Switch>
      <img className="news-card__image" src={props.image} alt={props.title}/>
      <div className="news-card__footer">
        <a href={props.link} className="news-card__link" target="_blank">
          <p className="news-card__date">{props.date}</p>
          <h3 className="news-card__title">{props.title}</h3>
          <article className="news-card__article">{props.text}</article>
          <p className="news-card__source">{props.source}</p>
        </a>
      </div>
    </li>);
}

export default NewsCard;
