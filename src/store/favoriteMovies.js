// import { create } from 'zustand';

// export const useFavoritesStore = create((set) => ({
//   favoriteCount: 0,
//   favorites: [], // Initialize an empty array for favorites
//   addToFavorites: (movie) => 
//     set((state) => ({
//       favoriteCount: state.favoriteCount + 1, // Increment the count
//       favorites: [...state.favorites, movie], // Add the new movie to the favorites array
//     })),
//     removeFromFavorites: (movie) =>
//       set((state) => {
//         const filteredFavorites = state.favorites.filter(
//           (fav) => fav.id !== movie.id // Assuming each movie has a unique 'id' property
//         );
//         return {
//           favoriteCount: state.favoriteCount - 1, // Decrement the count
//           favorites: filteredFavorites, // Update the favorites array
//         };
//       }),
//   resetFavorites: () => set({ favoriteCount: 0, favorites: [] }),
// }));

import { create } from 'zustand';
export const useFavoritesStore = create((set) => ({
  favoriteCount: 0,
  favorites: [], // Initialize an empty array for favorites
  // Function to add a movie to favorites
  addToFavorites: (movie) =>
    set((state) => ({
      favoriteCount: state.favoriteCount + 1, // Increment the count
      favorites: [...state.favorites, movie], // Add the new movie to the favorites array
    })),
  // Function to remove a movie from favorites
  removeFromFavorites: (movieId) =>
    set((state) => ({
      favoriteCount: state.favoriteCount - 1, // Decrement the count
      favorites: state.favorites.filter((movie) => movie.id !== movieId), // Remove the movie
    })),
  // Function to reset all favorites
  resetFavorites: () => set({ favoriteCount: 0, favorites: [] }),
}));