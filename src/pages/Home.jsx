import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'API/api-service';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getPopularMovies().then(items => setMovies(items));
  }, []);

  return (
    <ul>
      {movies.map(movie => {
        return (<li key={movie.id}>
          <NavLink to={`movies/${movie.id}`}>
            <img src={movie.poster_path} alt="" width="250px" />
            <p className='title'>Title: {movie.title || movie.name}</p>
          </NavLink>
        </li>
      )})}
    </ul>
  );
};

export default Home;
