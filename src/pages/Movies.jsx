import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from 'API/api-service';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSwarchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    api.getFindMovies(searchQuery).then(items => setSearchMovies(items));
  }, [searchQuery]);

  const getQuery = e => {
    e.preventDefault();
    setSwarchQuery(e.target.search.value);
  };

  return (
    <>
      <form onSubmit={getQuery}>
        <input type="text" name="search" />
        <button type="submit">search</button>
      </form>
      <ul>
        {searchMovies.length > 0 &&
          searchMovies.map(movie => <MoviesList key={movie.id} movie={movie} location={location} to={`${movie.id}`} />)}
      </ul>
    </>
  );
};

export default Movies;
