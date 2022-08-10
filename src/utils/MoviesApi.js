export const BASE_URL = " https://api.nomoreparties.co/beatfilm-movies";

export const getInitialMovies = () => {
  return (
    fetch(`${BASE_URL}`, {
        method: "GET",
    })
    .then((res) => res.json())
)};