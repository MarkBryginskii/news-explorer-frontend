import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = (props) => {

  const [isCardTooltipVisible, setIsCardTooltipVisible] = React.useState(false);

  const handleMouseHover = () => {
    setIsCardTooltipVisible(!isCardTooltipVisible);
  }

  const formatDate = (data) => {
    const date = new Date(data);

    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return date.toLocaleString("ru", options);
  }

  function handleClickSave(evt) {
    evt.preventDefault();

    if(props.isLoggedIn) {

      props.saveArticle({
        keyword: props.keyword,
        title: props.title,
        text: props.description,
        date: props.publishedAt,
        source: props.source.name,
        link: props.url,
        image: props.urlToImage,
      });
    }
  }

  function handleClickDelete(evt) {
    evt.preventDefault();

    props.deleteArticle(props);
  }

  return (
    <li className="news-card">
      <Switch>
        <Route exact path="/">
          <div className={`news-card__button-tooltip ${!props.isLoggedIn & isCardTooltipVisible && 'news-card__button-tooltip_active'}`}>
            <p className="news-card__button-tooltip-text">Войдите, чтобы сохранять статьи</p>
          </div>
          <button className={`news-card__button news-card__save-icon ${props.isSaved && 'news-card__save-icon_active'}`} type="button" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} onClick={handleClickSave} disabled={props.isSaved}></button>
        </Route>
        <Route exact path="/saved-news">
          <div className="news-card__categoty">
            <p className="news-card__categoty-text">{props.keyword}</p>
          </div>
          <div className={`news-card__button-tooltip ${isCardTooltipVisible && 'news-card__button-tooltip_active'}`}>
            <p className="news-card__button-tooltip-text">Убрать из сохранённых</p>
          </div>
          <button className="news-card__button news-card__trash-icon" type="button" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover} onClick={handleClickDelete}></button>
        </Route>
      </Switch>
      <img className="news-card__image" src={props.urlToImage || props.image} alt={props.title}/>
      <div className="news-card__footer">
        <a href={props.url || props.link} className="news-card__link" target="_blank">
          <p className="news-card__date">{formatDate(props.publishedAt || props.date)}</p>
          <h3 className="news-card__title">{props.title}</h3>
          <article className="news-card__article">{props.description  || props.text}</article>
          <p className="news-card__source">{props.source.name || props.source}</p>
        </a>
      </div>
    </li>);
}

export default NewsCard;
