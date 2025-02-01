import MovieDetails from '../components/MovieDetails';
import MoviesList from '../components/MoviesList';
import About from '../components/About';
import FavoriteMovies from '../components/FavoriteMovies';
import HelpCenter from '../components/HelpCenter';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

import { tokenLoader } from '../util/auth';
import { action as logoutAction } from '../pages/LogOut';
import AuthenticationPage, {
  action as authAction,
} from '../pages/AuthenticationPage';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      id: 'root',
      loader: tokenLoader,
      children: [
        { 
          index: true, 
          element: <MoviesList /> 
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: '/details',
          element: <MovieDetails />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/favorite-list',
          element: <FavoriteMovies />,
        },
        {
          path: '/help-center',
          element: <HelpCenter/>,
        },
        {
          path: 'logout',
          action: logoutAction,
        },
      ],
    },
  ]);