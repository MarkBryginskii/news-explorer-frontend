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


import {CurrentUserContext} from '../../contexts/CurrentUserContext';

const App = () => {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isLoggedIn, setIsloggedIn] = React.useState(true);

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = React.useState(false);

  const [isResultVisible, setIsResultVisible] = React.useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);

  const handleLoginClick = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  const handleNavButtonClick = () => {
    if(isNavPopupOpen) {
      closeAllPopups();
    }
    else {
      setIsNavPopupOpen(true);
    }
  }

  const showSearchResult = () => {
    setIsResultVisible(!isResultVisible);
  }

  const showPreloader = () => {
    setIsPreloaderActive(!isPreloaderActive);
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
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header
              theme='white'
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              isNavPopupOpen={isNavPopupOpen}
              onClose={closeAllPopups}
              setIsNavPopupOpen={setIsNavPopupOpen}
              handleNavButtonClick={handleNavButtonClick}
              formSwitcher={switchToLogin}/>
            <Main isPreloaderActive={isPreloaderActive} isResultVisible={isResultVisible} isLoggedIn={isLoggedIn}/>
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
              formSwitcher={switchToLogin}/>
            <SavedNews isLoggedIn={isLoggedIn}/>
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
        <Login isOpen={isLoginPopupOpen} onClose={closeAllPopups} formSwitcher={switchToRegister}/>
        <Register isOpen={isRegisterPopupOpen} onClose={closeAllPopups} formSwitcher={switchToLogin}/>
        <InfoTooltip isOpen={isInfoTooltipPopupOpen} onClose={closeAllPopups} formSwitcher={switchToLogin}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
