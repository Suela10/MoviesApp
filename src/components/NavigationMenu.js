import logo from '../images/like.png';
import { Form, Link, useLocation, useRouteLoaderData } from 'react-router-dom';
import { useFavoritesStore } from '../store/favoriteMovies';
import { useState } from 'react';
import { useEffect} from 'react';

const NavigationMenu = () => {
  const token = useRouteLoaderData('root');
 
  const favoriteCount = useFavoritesStore((state) => state.favoriteCount);
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  useEffect(() => {
    // Update active button whenever the location changes
    setActiveButton(location.pathname);
  }, [location.pathname]);
  const isActive = (path) => activeButton === path;


  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <img className='h-8 w-auto' src={logo} alt='Your Company' />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  onClick={() => setActiveButton('/')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to='/about'
                  onClick={() => setActiveButton('/about')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/about')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  About Us
                </Link>
                {token && (
                  <Link
                    to='/favorite-list'
                    onClick={() => setActiveButton('/favorite-list')}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive('/favorite-list')
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Favorite ({favoriteCount})
                  </Link>
                )}
                <Link
                  to='/help-center'
                  onClick={() => setActiveButton('/help-center')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/help-center')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Help Center
                </Link>
                <Link
                  to='/auth?mode=login'
                  onClick={() => setActiveButton('/auth')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/auth')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Sign Up
                </Link>
                {token && (
                  <Form action='/logout' method='post'>
                    <button className='bg-yellow-500 rounded-md px-3 py-2 text-md text-black font-medium  hover:bg-yellow-700 hover:text-black'>
                      Logout
                    </button>
                  </Form>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            to='/'
            onClick={() => setActiveButton('/')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to='/about'
            onClick={() => setActiveButton('/about')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/about')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            About Us
          </Link>
          <Link
            to='/favorite-list'
            onClick={() => setActiveButton('/favorite-list')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/favorite-list')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Favorite
          </Link>
          <Link
            to='/help Center'
            onClick={() => setActiveButton('/help Center')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/help Center')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Help Center
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;