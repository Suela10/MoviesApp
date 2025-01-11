import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]); // State for favorite movies
  const navigate = useNavigate();
  useEffect(() => {
    // Load favorite movies from localStorage on initial load
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setFavoriteMovies(storedFavorites);
    // Fetch movies from API
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/movies');
        setMovies(response.data);
      } catch (err) {
        console.log('Error:', err.message);
      }
    };
    fetchMovies();
  }, []);
  const addToFavorites = (movie) => {
    // Avoid duplicates in the favorites list
    if (!favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
      const updatedFavorites = [...favoriteMovies, movie];
      setFavoriteMovies(updatedFavorites);
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites)); // Save to localStorage
    } else {
      alert('This movie is already in your favorites!');
    }
  };
  const handleMyListClick = () => {
    navigate('/my-list');  // Navigate to My List page
  };
  return (
    <div className="h-screen p-4 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div className="flex-none" key={movie.id}>
            <MovieCard
              movieProps={movie}
              addToFavorites={addToFavorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MoviesList;