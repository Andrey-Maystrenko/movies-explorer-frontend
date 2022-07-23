import React from "react";
import "./App.css";
import "../../index.css";
import Preloader from "../../vendor/preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import api from "../utils/api";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import {
  Route,
  Switch,
  // Redirect,
  withRouter,
  // useHistory,
} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AboutProject from "../Main/AboutProject/AboutProject";
// import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/MoviesCardList/MoviesCardListSaved";
import AboutMe from "../Main/AboutMe/AboutMe";
import Promo from "../Main/Promo/Promo";
import NavTab from "../Main/NavTab/NavTab";
import Techs from "../Main/Techs/Techs";
import Portfolio from "../Main/Portfolio/Portfolio";
import Profile from "../Profile/Profile"
import SearchForm from "../Movies/SearchForm/SearchForm";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
// import ProtectedRoute from "./ProtectedRoute";
// import * as MainApi from "../utils/MainApi";


function App() {

  return (
    <div className="page">
      {/* <Header email={email} onSignOut={onSignOut} /> */}
      <Header />
      <Switch>
        <Route exact path="/">
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SearchForm />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          {/* <Login handleLogin={handleLogin} /> */}
          <Login />
        </Route>
        <Route path="/signup">
          {/* <Register handleRegister={handleRegister} /> */}
          <Register />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
      </Switch>
      <Preloader />
      {/* <Switch>
          <Route>
            {loggedIn ? <Redirect to="/main" /> : <Redirect to="/signup" />}
          </Route>
        </Switch> */}
      {/* <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          saveButtonName="Да"
          onClose={closeAllPopups}
          // onSubmit
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <InfoTooltip
          onClose={closeAllPopups}
          onSuccess={isSuccessfulRegister}
          onFailure={isFailuredRegister}
          successMessage="Вы успешно зарегистрировались!"
          failureMessge="Что-то пошло не так! Попробуйте еще раз."

          /> */}
    </div>
  );
}
export default withRouter(App);
