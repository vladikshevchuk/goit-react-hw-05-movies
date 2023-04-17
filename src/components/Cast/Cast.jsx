import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'API/api-service';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api.getCredits(movieId).then(item => setCast(item));
  });

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={actor.profile_path}
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
