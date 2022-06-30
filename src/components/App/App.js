import React from "react";
import "./App.css";
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
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/MoviesCardList/MoviesCardList";
import AboutMe from "../Main/AboutMe/AboutMe";
// import ProtectedRoute from "./ProtectedRoute";
// import * as mestoAuth from "../utils/moviesAuth";

function App() {
  return (
      <div className="page">
        {/* <Header email={email} onSignOut={onSignOut} /> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <AboutProject />
          </Route>
        </Switch>
        {/* <Switch>
          <Route exact path="/">
            <AboutProject />
          </Route>
          <Route path="/movies">
            <MoviesCardList />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <AboutMe />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
            <Login />
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister} />
            <Register />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/main" /> : <Redirect to="/signup" />}
          </Route>
        </Switch> */}
        {/* <Footer /> */}
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
