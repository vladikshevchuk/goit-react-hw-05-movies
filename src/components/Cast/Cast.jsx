import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'API/api-service';
import no_movie from '../../images/no-movie.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const message = "We don't have any cast for this movie";

  useEffect(() => {
    api.getCredits(movieId).then(item => setCast(item));
  }, [movieId]);

  return cast.length === 0 ? (
    <p>{message}</p>
  ) : (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={!actor.profile_path ? no_movie : `https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width="200px"
            />
            <p className='title'>{actor.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
