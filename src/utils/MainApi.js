export const BASE_URL = "https://api.diploma-koga-717.nomoredomains.xyz";
// export const BASE_URL = "http://localhost:4001";
export const IMG_BASE_URL = "https://api.nomoreparties.co";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

// .then(res => res.ok ? res.json() : Promise.reject(res.status))

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json());
}

export const postMovie = (movieData, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
    .then(checkResponse)
};

export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
};

export const register = (name, email, password) => {
  return (
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
  )
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(checkResponse)
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
    // .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(checkResponse)
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
    .then(checkResponse)
    .then((data) => data)
};

export const patchUserData = (name, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email })
  })
    .then((res) => res.json())
    .then((data) => data);
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

// export const getInitialSavedMovies = (token) => {
//   return fetch(`${BASE_URL}/saved-movies`, {
//     // mode: "no-cors",
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => res.json());
// }
