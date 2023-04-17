import { Outlet } from 'react-router-dom';
import LinkStyled from './styledCssForLink/LincStyled';

const SharedLayout = () => {
  return (
    <div className='body-App'>
      <header>
        <nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="movies">Movies</LinkStyled>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>made by means of "The Movie Database API"</footer>
    </div>
  );
};

export default SharedLayout;
