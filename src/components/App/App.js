import React from "react";
import {
  Route,
  Switch,
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

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();

  // const [isFailuredRegister, setIsFailuredRegister] = React.useState();

  const JWT = localStorage.getItem("jwt");

  const [loggedIn, setLoggedIn] = React.useState(Boolean(JWT));
  console.log('JWT', JWT)

  const [dataOfMovie, setDataOfMovie] = React.useState([]);

  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    console.log('useffect started');
    // tokenCheck();
    if (loggedIn) {
      MainApi
        .getContent(JWT)
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
          setLoggedIn(false);
          setCurrentUser({});
        })
    }
  }, [loggedIn]);

  console.log(currentUser)
  console.log('loggedIn', loggedIn)

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
  const [totalSavedMovies, setTotalSavedMovies] = React.useState([]);

  function getAllSavedMovies(allSavedMovies) { setTotalSavedMovies(allSavedMovies) }

  console.log('totalSavedMovies', totalSavedMovies)
  

  React.useEffect((allSavedMovies) => {
    getAllSavedMovies(allSavedMovies)
  }, [])
  // console.log('dataOfMovie', dataOfMovie)

  console.log('что пришло в из saved-movies', getAllSavedMovies)

  // React.useEffect(() => {
  //   allSavedMovies.forEach((element) => {
  //     if (element.movieId === dataOfMovie.id) { setIsSaved(true) }
  //   })
  // }, [])

  function handleRegister(name, email, password) {
    MainApi
      .register(name, email, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/");
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        // return setIsFailuredRegister(true);
      });
  }

  function handleLogin(email, password) {
    return MainApi
      .authorize(email, password)
      .then((token) => {
        if (token) {
          localStorage.setItem("jwt", token);
          setLoggedIn(true);
          history.push("/");
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
        setCurrentUser(updatedUser)
      })
      .catch((err) => console.log(err))
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
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
            loggedIn={loggedIn}
          // dataOfMovie={setDataOfMovie(dataOfMovie)}
          // isSaved={isSaved}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            getAllSavedMovies={getAllSavedMovies}
          //getAllSavedMovies(allSavedMovies) = getAllSavedMovies
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
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
            // isFailuredRegister={isFailuredRegister}
            />
          </Route>
          <Route path="/notfound">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default withRouter(App);
