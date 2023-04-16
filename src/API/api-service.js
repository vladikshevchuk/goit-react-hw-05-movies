import axios from 'axios';

const API_KEY = '?api_key=fb4eca5dd3545235e4fd6796c70d4d40';
const MAIN_URL = 'https://api.themoviedb.org/3';

async function getPopularMovies() {
  try {
      const response = await axios.get(`${MAIN_URL}/trending/all/day${API_KEY}`);
      const movies = await response.data.results;
    return movies;
  } catch (error) {
    console.error(error);
  }
}

async function getFindMovies() {
   try {
      const response = await axios.get(`${MAIN_URL}/search/movie${API_KEY}&language=en-US&page=1&include_adult=false`);
      const movies = await response.data.results;
    return movies;
  } catch (error) {
    console.error(error);
  } 
}

async function getDetails(movieId) {
   try {
      const response = await axios.get(`${MAIN_URL}/movie/${movieId}${API_KEY}&language=en-US`);
      const movies = await response.data.results;
    return movies;
  } catch (error) {
    console.error(error);
  } 
}

async function getCredits(movieId) {
   try {
      const response = await axios.get(`${MAIN_URL}/movie/${movieId}/credits${API_KEY}&language=en-US`);
      const movies = await response.data.results;
    return movies;
  } catch (error) {
    console.error(error);
  } 
}

async function getReviews(movieId) {
   try {
      const response = await axios.get(`${MAIN_URL}/movie/${movieId}/reviews${API_KEY}&language=en-US`);
      const movies = await response.data.results;
    return movies;
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
