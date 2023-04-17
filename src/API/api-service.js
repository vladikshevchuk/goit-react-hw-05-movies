/* eslint-disable array-callback-return */
import axios from 'axios';
import no_movie from 'images/no-movie.jpg';

const API_KEY = '?api_key=fb4eca5dd3545235e4fd6796c70d4d40';
const MAIN_URL = 'https://api.themoviedb.org/3';

async function getPopularMovies() {
  try {
    const response = await axios.get(`${MAIN_URL}/trending/all/day${API_KEY}`);
    const movies = await response.data.results;
    movies.map(movie => {
      if (movie.poster_path !== null) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      } else {
        movie.poster_path = no_movie;
      }
    });
    return movies;
  } catch (error) {
    console.error(error);
  }
}

async function getFindMovies(query) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    const movies = await response.data.results;
    movies.map(movie => {
      if (movie.poster_path !== null) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      } else {
        movie.poster_path = no_movie;
      }
    });
    return movies;
  } catch (error) {
    console.error(error);
  }
}

async function getDetails(movieId) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/movie/${movieId}${API_KEY}&language=en-US`
    );
    const movie = response.data;
    if (movie.poster_path !== null) {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      } else {
        movie.poster_path = no_movie;
      }
    return movie;
  } catch (error) {
    console.error(error);
  }
}

async function getCredits(movieId) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/movie/${movieId}/credits${API_KEY}&language=en-US`
    );
    const cast = response.data.cast;
    cast.map(actor => {
      if (actor.profile_path !== null) {
        actor.profile_path = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
      } else {
        actor.profile_path = no_movie;
      }
    });
    return cast;
  } catch (error) {
    console.error(error);
  }
}

async function getReviews(movieId) {
  try {
    const response = await axios.get(
      `${MAIN_URL}/movie/${movieId}/reviews${API_KEY}&language=en-US`
    );
    const reviews = response.data.results;
    return reviews;
  } catch (error) {
    console.error(error);
  }
}

export const api = {
  getPopularMovies,
  getFindMovies,
  getDetails,
  getCredits,
  getReviews,
};
