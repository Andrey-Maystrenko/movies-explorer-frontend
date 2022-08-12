import React from "react";
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
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AboutProject from "../Main/AboutProject/AboutProject";
import AboutMe from "../Main/AboutMe/AboutMe";
import Promo from "../Main/Promo/Promo";
import NavTab from "../Main/NavTab/NavTab";
import Techs from "../Main/Techs/Techs";
import Portfolio from "../Main/Portfolio/Portfolio";
import Profile from "../Profile/Profile"
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import ProtectedRoute from "../ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import Description from "../Description/Description";

function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();

  const [isFailuredRegister, setIsFailuredRegister] = React.useState(false);
  // console.log('isFailuredRegister', isFailuredRegister)

  const JWT = localStorage.getItem("jwt");

  const [loggedIn, setLoggedIn] = React.useState(Boolean(JWT));
  // console.log('JWT', JWT)

  const [isGettingCurrenUser, setIsGettingCurrenUser] = React.useState(true);

  React.useEffect(() => {
    // console.log('useffect started');
    // tokenCheck();
    if (loggedIn) {
      MainApi
        .getContent(JWT)
        .then((res) => {
          setCurrentUser(res)
          setIsGettingCurrenUser(false);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
          setLoggedIn(false);
          setCurrentUser({});
        })
    }
  }, [loggedIn]);

  // console.log(currentUser)
  // console.log('loggedIn', loggedIn)

  function handleRegister(name, email, password) {
    MainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        setIsFailuredRegister(true);
      });
  }

  function handleLogin(email, password) {
    return MainApi
      .authorize(email, password)
      .then((token) => {
        if (token) {
          localStorage.setItem("jwt", token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        setIsFailuredRegister(true);
      });
  }

  function handlePatchUserData(name, email) {
    return MainApi
      .patchUserData(name, email, JWT)
      .then((updatedUser) => {
        // console.log('updatedUser', updatedUser)
        setCurrentUser(updatedUser)
      })
      .catch((err) => console.log(err))
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    localStorage.setItem("shorty", false);
    localStorage.setItem("keyword", "");
    // localStorage.setItem("shortySavedMovies", false);
    // localStorage.setItem("keywordSavedMovies", "");
    localStorage.setItem("foundMovies", JSON.stringify([]));
    setLoggedIn(false);
  }

  if (isGettingCurrenUser && JSON.stringify(currentUser) !== '{}') return null;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          loggedIn={loggedIn}
        />
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
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            handlePatchUserData={handlePatchUserData}
            onSignOut={onSignOut}
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
          />
          <Route path="/signin">
            {!loggedIn ?
              <Login
                handleLogin={handleLogin}
                isFailuredRegister={isFailuredRegister}
              /> :
              <Redirect to="/" />
            }
          </Route>
          <Route path="/signup">
            {!loggedIn ?
              <Register
                handleRegister={handleRegister}
                isFailuredRegister={isFailuredRegister}
              /> :
              <Redirect to="/" />
            }
          </Route>
          <ProtectedRoute
            path="/description"
            component={Description}
            loggedIn={loggedIn}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default withRouter(App);

// function tokenCheck() {
  //   let jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     MainApi
  //       .getContent(jwt)
  //       .then((res) => {
  //         // setEmail(res.email);
  //         // setCurrentUser(res);
  //         setLoggedIn(true);
  //       })
  //       .catch((err) => {
  //         console.log(err); // выведем ошибку в консоль
  //       });
  //   }
  // }