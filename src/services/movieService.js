import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

function createMovie(movie) {
  return http.post(apiEndpoint, movie);
}

function updateMovie(movie) {
  const body = { ...movie };
  delete body._id;
  return http.put(movieUrl(movie._id), body);
}

export function saveMovie(movie) {
  return movie._id ? updateMovie(movie) : createMovie(movie);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}
