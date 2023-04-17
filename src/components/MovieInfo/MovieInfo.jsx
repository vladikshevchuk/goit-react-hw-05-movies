import PropTypes from 'prop-types';
import no_movie from '../../images/no-movie.jpg';

const MovieInfo = ({ movie }) => {
  return (
    <div className="movie">
      <img
        src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : no_movie}
        alt={movie.title}
        width="250px"
      />
      <div className="description">
        <h2>{movie.title || movie.name}</h2>
        <p>Overview:</p>
        <p>{movie.overview}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>Release date: {movie.release_date}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieInfo;
