import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

import NavPopup from '../NavPopup/NavPopup';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import {NUMBER_OF_SHOWN_CARDS} from '../../utils/NewsApiConfig';
import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';


import {CurrentUserContext} from '../../contexts/CurrentUserContext';

const App = () => {

  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState({});

  const [isAuthFail, setIsAuthFail] = React.useState(false);
  const [isLoggedIn, setIsloggedIn] = React.useState(false);

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isPopupBlocked, setIsPopupBlocked] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  const [isResultVisible, setIsResultVisible] = React.useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [isShowMoreBtnActive, setIsShowMoreBtnActive] = React.useState(false);
  const [noSearchResults, setNoSearchResults] = React.useState(false);
  const [newsCardsShown, setNewsCardsShown] = React.useState(3);

  const [savedNews, setSavedNews] = React.useState([]);
  const [shownNews, setShownNews] = React.useState([]);

  //#region MAIN-API

  React.useEffect( () => {
    if(localStorage.getItem('jwt')) {
      mainApi.userInfo(localStorage.getItem('jwt'))
      .then((userData) => {
        setCurrentUser(userData);
      })
      .then(() => {
        setIsloggedIn(true);
        getSavedArticles();
        history.push('/');
      })
      .then(() => {
        if (localStorage.lastSearch) {
          setShownNews(JSON.parse(localStorage.getItem('lastSearch')).slice(0, newsCardsShown));
          setIsResultVisible(true);
          setIsShowMoreBtnActive(true);
        }
      })
      .catch((err) => {console.log(err)});
    }
  }, [history]);

  const handleNavButtonClick = () => {
    if(isNavPopupOpen) {
      closeAllPopups();
    }
    else {
      setIsNavPopupOpen(true);
    }
  }

  const switchToLogin = () => {
    closeAllPopups();
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  const switchToRegister = () => {
    closeAllPopups();
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  }

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setIsNavPopupOpen(false);
    setIsAuthFail(false);
  }

  const handleRegister = (obj) => {
    setIsPopupBlocked(true);
    mainApi.register(obj)
    .then((res) => {
      if(!res.message) {
        closeAllPopups();
        setIsInfoTooltipPopupOpen(true);
        setIsPopupBlocked(false);
      } else {
        setIsAuthFail(true);
        setIsPopupBlocked(false);
      }
    })
    .catch((err) => {console.log(err)})
  }

  const handleLogin = (obj) => {
    setIsPopupBlocked(true);
    mainApi.login(obj)
    .then((res) => {
      if(res.token) {
        mainApi.userInfo(res.token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .then(() => {
          closeAllPopups();
          setIsPopupBlocked(false);
          setIsloggedIn(true);
          history.push('/');
        })
        .catch((err) => {console.log(err)})
      } else {
        setIsAuthFail(true);
      }
    })
    .catch((err) => {console.log(err)})
  }

  function handleLogoff() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearch');
    setIsloggedIn(false);
    history.push('/');
  }

  //#endregion

  //#region NEWS-API

  const resetSearch = () => {
    localStorage.removeItem('lastSearch');
    setNewsCardsShown(3);
    setShownNews([]);
    setNoSearchResults(false);
    setIsShowMoreBtnActive(false);
  }

  const checkIfItSaved = (row, keyword) => {
    if(savedNews.some(el => el.link === row.url)) {
      return ({keyword: keyword, isSaved: true, ...row});
    } else {
      return ({keyword: keyword, isSaved: false, ...row});
    }
  }

  const handleSearch = async ({keyword}) => {
    resetSearch();

    setIsResultVisible(true);
    setIsPreloaderActive(true);

    const data = await newsApi.getNews(keyword);
    if (data.articles.length === 0) {
      setIsPreloaderActive(false);
      setNoSearchResults(true);
    } else {
      const processedData = await data.articles.map((row) => checkIfItSaved(row, keyword));
      setIsPreloaderActive(false);
      localStorage.setItem('lastSearch',JSON.stringify(processedData));
      setShownNews(JSON.parse(localStorage.getItem('lastSearch')).slice(0, newsCardsShown));
      setIsShowMoreBtnActive(true);
    }
  }

  const getSavedArticles = () => {
    mainApi.getArticles()
    .then((res) => {setSavedNews(res)})
    .catch((err) => {console.log(err)});
  }

  const saveArticle = (article) => {
    if(isLoggedIn) {
      mainApi.saveArticle(article)
      .then((res) => {
        setSavedNews([res , ...savedNews]);
        const newShownNews = shownNews.map((c) => c.url === article.link ? (Object.assign({}, c, {isSaved: true})) : c);
        setShownNews(newShownNews);
      })
      .catch((err) => {console.log(err)});
    } else {
      setIsRegisterPopupOpen(true);
    }
  }

  const deleteArticle = (article) => {
    mainApi.deleteArticle(article._id)
    .then(() => {
      const newCards = savedNews.filter((c) => c._id !== article._id);
      setSavedNews(newCards);
      const newShownNews = shownNews.map((c) => c.url === article.link ? (Object.assign({}, c, {isSaved: false})) : c);
      setShownNews(newShownNews);
    })
    .catch((err) => {console.log(err)});
  }

  //#endregion

  const handleShowMore = () => {
    setNewsCardsShown(newsCardsShown + NUMBER_OF_SHOWN_CARDS);
    setShownNews(JSON.parse(localStorage.getItem('lastSearch')).slice(0, newsCardsShown));
  }

  // ============================================================================================

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header
              theme='white'
              isLoggedIn={isLoggedIn}
              isNavPopupOpen={isNavPopupOpen}
              onClose={closeAllPopups}
              setIsNavPopupOpen={setIsNavPopupOpen}
              handleNavButtonClick={handleNavButtonClick}
              formSwitcher={switchToLogin}
              onLogoff={handleLogoff}
              userName={currentUser.name}/>
            <Main
              onSubmit={handleSearch}
              shownNews={shownNews}
              saveArticle={saveArticle}
              isPreloaderActive={isPreloaderActive}
              noSearchResults={noSearchResults}
              isResultVisible={isResultVisible}
              handleShowMore={handleShowMore}
              isLoggedIn={isLoggedIn}
              isShowMoreBtnActive={isShowMoreBtnActive}/>
          </Route>
          <ProtectedRoute exact path="/saved-news" isLoggedIn={isLoggedIn}>
            <Header
              theme={isNavPopupOpen ? 'white' : 'dark'}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              isNavPopupOpen={isNavPopupOpen}
              onClose={closeAllPopups}
              setIsNavPopupOpen={setIsNavPopupOpen}
              handleNavButtonClick={handleNavButtonClick}
              formSwitcher={switchToLogin}
              onLogoff={handleLogoff}/>
            <SavedNews isLoggedIn={isLoggedIn} savedNews={savedNews} deleteArticle={deleteArticle}/>
          </ProtectedRoute>
        </Switch>
        <Footer />
        <NavPopup
          theme='white'
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onClose={closeAllPopups}
          isNavPopupOpen={isNavPopupOpen}
          handleNavButtonClick={handleNavButtonClick}
          formSwitcher={switchToLogin}/>
        <Login isPopupBlocked={isPopupBlocked} onSubmit={handleLogin} isOpen={isLoginPopupOpen} onClose={closeAllPopups} formSwitcher={switchToRegister} isAuthFail={isAuthFail}/>
        <Register isPopupBlocked={isPopupBlocked} onSubmit={handleRegister} isOpen={isRegisterPopupOpen} onClose={closeAllPopups} formSwitcher={switchToLogin} isAuthFail={isAuthFail}/>
        <InfoTooltip isOpen={isInfoTooltipPopupOpen} onClose={closeAllPopups} formSwitcher={switchToLogin}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
