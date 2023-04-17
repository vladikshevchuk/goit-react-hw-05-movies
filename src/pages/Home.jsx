import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'API/api-service';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    api.getPopularMovies().then(items => setMovies(items));
  }, []);

  return (
    <ul>
      {movies.map(movie => <MoviesList key={movie.id} movie={movie} location={location} to={`movies/${movie.id}`}/>)}
    </ul>
  );
};

export default Home;
