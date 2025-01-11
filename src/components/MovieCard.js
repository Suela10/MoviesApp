import React, { useState } from 'react';
import logo from '../images/like.png';
import Hashtag from './Hashtag';
import { useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import NavigateButton from './NavigateButton';
import { useFavoritesStore } from '../store/favoriteMovies';
import { useMovieLikes } from '../store/likeState';


const MovieCard = ({ movieProps }) => {
  //const [likeCount, setLikeCount] = useState(0); // State for like count
  const navigate = useNavigate();
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const addToLikes = useMovieLikes((state) => state.addToLikes);
  const likeCount = useMovieLikes((state) => state.likeCount )
  const favorites = useFavoritesStore((state) => state.favorites);
  const isAlreadyFavorite = favorites.some((fav) => fav.id === movieProps.id);

  const handleClick = () => {
    navigate('/details', { state: {...movieProps} });
  };

  const handleLikeClick = () => {
    addToLikes();
    //setLikeCount(prevCount => prevCount + 1); // Increment the like count
  };

  const handleAddToFavorites = () => {
    if (!isAlreadyFavorite) {
      addToFavorites(movieProps); // Add the current movie to favorites
    }
  };

  return (
    <div className='max-w-md rounded overflow-hidden shadow-lg h-full'>
      <img
        className='w-full'
        src={`http://localhost:3001/${movieProps.image}`}
        alt='Sunset in the mountains'
        style={{ height: '400px' }}
      />
      <div className='px-6 py-4 flex items-center justify-between'>
        {/* Like Button */}
        <button
          type='button'
          onClick={handleLikeClick} // Add the click handler
          className='text-white bg-transparent hover:bg-red-700/90 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center'
        >
          <div className='flex items-center'>
            <img className='h-8 w-auto' src={logo} alt='like' />
          </div>
        </button>
        
        {/* Like Count */}
        <span className='text-gray-800 font-bold text-lg'>{likeCount}</span>
        
      </div>
      <div className='px-6'>
        <div className='font-bold text-xl mb-2'>{movieProps.title}</div>
        <p className='text-gray-700 text-base'>{movieProps.description}</p>
      </div>
      <NavigateButton label='See Details' onNavigate={handleClick} />
      <button   onClick={handleAddToFavorites} class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'>
      Add to Favorites
    </button>
      <DeleteButton label='Delete' />
      <div className='px-6 pt-4 pb-2'>
        <Hashtag tag1='action' tag2='drama' tag3='winter' />
      </div>
    </div>
  );
};

export default MovieCard;