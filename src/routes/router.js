import Footer from '../components/Footer';
import NavigationMenu from '../components/NavigationMenu'; // Ensure this is imported
import MovieDetails from '../components/MovieDetails';
import About from '../components/About';
import FavoriteMovies from '../components/FavoriteMovies';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MoviesList from '../components/MoviesList';

export const createRouter = () =>
  createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MoviesList />,
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
          path: '/favoriteMovies',
          element: <FavoriteMovies />,
        },
       
      ],
    },
  ]);