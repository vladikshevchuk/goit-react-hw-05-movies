import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { api } from '../API/api-service';
import LinkStyled from 'components/styledCssForLink/LinkStyled';
import Button from 'components/styledCssForLink/ButtonStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    api.getDetails(movieId).then(item => setMovie(item));
  }, [movieId]);

  return (
    <>
      <Button to={backLinkLocationRef.current}>back</Button>
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
