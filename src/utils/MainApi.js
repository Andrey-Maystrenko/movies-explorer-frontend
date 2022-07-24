// export const BASE_URL = "https://auth.nomoreparties.co";
// export const BASE_URL = "https://api.diploma-koga-717.nomoredomains.xyz";
export const BASE_URL = "http://localhost:4001";
export const IMG_BASE_URL = "https://api.nomoreparties.co";

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies` , {
    method: "GET",
    headers: {
      "Content-Type": "application/json", 
    // Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json());
}

export const getSavedMovies2 = () => {
  return fetch(`${BASE_URL}/saved-movies` , {
    method: "GET",
    headers: {
      "Content-Type": "application/json", 
    // Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json());
}


export const postMovie = (movieData) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization:
    },
    body: JSON.stringify({
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: `${IMG_BASE_URL}${movieData.image.url}`,
      trailerLink: movieData.trailerLink,
      thumbnail: `${IMG_BASE_URL}${movieData.image.url}`,
      movieId: movieData.id,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN,
    }),
  })
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    // headers: {
    //   // authorization:
    // },
  })
};

// export const getMovieById = (movieId) => {
//   return fetch(`${BASE_URL}/movies`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       // Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ movieId }),
//   })
//     .then((res) => res.json())
// };


export const register = (email, password) => {
  return (
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
  );
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => data.token)
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};