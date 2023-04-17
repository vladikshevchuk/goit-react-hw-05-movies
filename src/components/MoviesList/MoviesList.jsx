import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import no_movie from '../../images/no-movie.jpg';

const MoviesList = ({ movie, location, to }) => {
  return (
    <li>
      <NavLink to={to} state={{ from: location }}>
        <img
          src={
            movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : no_movie
          }
          alt=""
          width="250px"
        />
        <p className="title">Title: {movie.title || movie.name}</p>
      </NavLink>
    </li>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
}

export default MoviesList;
