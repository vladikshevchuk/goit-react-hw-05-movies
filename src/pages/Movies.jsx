import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { api } from 'API/api-service';
import no_movie from 'images/no-movie.jpg';

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
          searchMovies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`${movie.id}`} state={{from: location}}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` || no_movie} alt="" width="250px" />
                  <p className='title'>{movie.title || movie.name}</p>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
