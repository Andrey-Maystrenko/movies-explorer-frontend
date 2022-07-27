import React from "react";
// import api from "../utils/api";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import "../../index.css";
// import Preloader from "../../vendor/preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AboutProject from "../Main/AboutProject/AboutProject";
// import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
// import SavedMovies from "../SavedMovies/MoviesCardList/MoviesCardListSaved";
import AboutMe from "../Main/AboutMe/AboutMe";
import Promo from "../Main/Promo/Promo";
import NavTab from "../Main/NavTab/NavTab";
import Techs from "../Main/Techs/Techs";
import Portfolio from "../Main/Portfolio/Portfolio";
import Profile from "../Profile/Profile"
// import SearchForm from "../Movies/SearchForm/SearchForm";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import ProtectedRoute from "../ProtectedRoute";
import * as MainApi from "../../utils/MainApi";


function App() {
  const [currentUser, setCurrentUser] = React.useState();
  const history = useHistory();
  // const [email, setEmail] = React.useState();
  const [isFailuredRegister, setIsFailuredRegister] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const JWT = localStorage.getItem("jwt");
  console.log('JWT', JWT)

  // React.useEffect(() => {
  //   if (loggedIn) {
  //     history.push("/");
  //   }
  // }, [loggedIn, history]);

  React.useEffect(() => {
    // tokenCheck();
    if (loggedIn) {
      MainApi
        .getContent(JWT)
        .then((res) => setCurrentUser(res))
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }, [loggedIn, JWT]);

  console.log(currentUser)
  console.log('loggedIn', loggedIn)

  function handleRegister(name, email, password) {
    MainApi
      .register(name, email, password)
      .then(() => {
        setLoggedIn(true);
        // history.push("/signin");
        history.push("/movies");
        // setIsSuccessfulRegister(true);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        return setIsFailuredRegister(true);
      });
  }

  function handleLogin(email, password) {
    return MainApi
      .authorize(email, password)
      .then((token) => {
        if (token) {
          localStorage.setItem("jwt", token);
          // setEmail(email);
          setLoggedIn(true);
          history.push("/");
          // history.push("/movies");

        }
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        // return setIsFailuredRegister(true);
      });
  }

  function handlePatchUserData(name, email) {
    return MainApi
      .patchUserData(name, email, JWT)
      .then((updatedUser) => {
        console.log('updatedUser', updatedUser)
        setCurrentUser(updatedUser)})
      .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          <ProtectedRoute
            path="/movies"
            component={Movies}
            JWT={JWT}
            loggedIn={!loggedIn}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            JWT={JWT}
            loggedIn={!loggedIn}
          />
          <Route path="/profile">
            <Profile
              handlePatchUserData={handlePatchUserData}
              currentUser={currentUser}
            />
          </Route>
          {/* <ProtectedRoute
            path="/profile"
            component={Profile}
            handlePatchUserData={handlePatchUserData}
            // JWT={JWT}
            loggedIn={loggedIn}
            // currentUser={currentUser}
          /> */}
          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              isFailuredRegister={isFailuredRegister} />
          </Route>
          <Route path="/notfound">
            <NotFound />
          </Route>

        </Switch>
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
    </CurrentUserContext.Provider>
  );
}
export default withRouter(App);
