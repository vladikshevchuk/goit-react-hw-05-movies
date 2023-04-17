import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { api } from '../API/api-service';
import LinkStyled from 'components/styledCssForLink/LinkStyled';
import Button from 'components/styledCssForLink/ButtonStyled';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    api.getDetails(movieId).then(item => setMovie(item));
  }, [movieId]);

  if (!movie) {
    return <>Not Found</>;
  }

  return (
    <>
      <Button to={backLinkLocationRef.current}>back</Button>
      {movie && (
        <>
          <MovieInfo movie={ movie} />
          <div className="movie-info">
            <p>Additional information</p>
            <ul className="movie-info-link">
              <li className="link">
                <LinkStyled to="cast">cast</LinkStyled>
              </li>
              <li className="link">
                <LinkStyled to="reviews">reviews</LinkStyled>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
