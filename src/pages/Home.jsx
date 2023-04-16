import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../API/api-service';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getPopularMovies().then(items => setMovies(items));
  }, []);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}><NavLink to={`movies/${movie.id}`}>{movie.title || movie.original_name}</NavLink></li>
      ))}
    </ul>
  );
};
export default Home;
