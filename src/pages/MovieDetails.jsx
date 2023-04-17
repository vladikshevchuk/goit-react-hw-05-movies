import LinkStyled from 'components/styledCssForLink/LincStyled';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { api } from '../API/api-service';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    api.getDetails(movieId).then(item => setMovie(item));
  }, [movieId]);

  return (
    <>
      <div className="movie">
        <img src={movie.poster_path} alt={movie.title} width="250px" />
        <div className="description">
          <h2>{movie.title || movie.name}</h2>
          <p>Overview:</p>
          <p>{movie.overview}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Release date: {movie.release_date}</p>
        </div>
      </div>
      <div className='movie-info'>
        <p>Additional information</p>
        <ul className='movie-info-link'>
          <li className='link'>
            <LinkStyled to="cast">cast</LinkStyled>
          </li>
          <li className='link'>
            <LinkStyled to="reviews">reviews</LinkStyled>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
