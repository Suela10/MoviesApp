import React from 'react';
import { useFavoritesStore } from '../store/favoriteMovies';

const FavoriteMovies = () => {
  const favorites = useFavoritesStore((state) => state.favorites); // Access the favorites array
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);
  const resetFavorites = useFavoritesStore((state) => state.resetFavorites);

  return (
    <div className="myList">
      <h1 className="text-2xl font-bold my-4">Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="favCard overflow-hidden p-2 h-full">
          {favorites.map((favorite, index) => (
            <div key={index} className="w-85 rounded overflow-hidden shadow-lg bg-slate-300 m-4">
              <img
                src={`http://localhost:8080/${favorite.image}`}
                alt={favorite.title}
                className="w-85 h-96 m-0"
              />
            <div className='px-4 py-4 overflow-hidden'>
              <h2 className="font-bold text-xl mb-2 p-2">{favorite.title}</h2>
              <p className='text-gray-700 text-base p-4'>{favorite.description}</p>
            </div>
            <button
                className="m-3 bg-cyan-950 hover:bg-stone-900 text-white font-bold py-2 px-2 rounded-full mr-1"
                onClick={() => removeFromFavorites(favorite.id)} // Pass the movie ID to remove
              >
                Remove from 'My List'
            </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies added yet.</p>
      )}
      <button
            onClick={resetFavorites}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4"
          >
            Clear Favorites
          </button>
    </div>
  );
};
export default FavoriteMovies;

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-2xl font-bold my-4">Favorite Movies</h1>
//       {favorites.length > 0 ? (
//         <ul className="list-disc pl-5">
//           {favorites.map((favorite, index) => (
//             <li key={index} className="my-2">
//               <h2 className="text-xl font-semibold">{favorite.title}</h2>
//               <p>{favorite.description}</p>
//               <img
//                 src={`http://localhost:8080/${favorite.image}`}
//                 alt={favorite.title}
//                 className="w-48 h-48 object-cover mt-2"
//               />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No favorite movies added yet.</p>
//       )}
//     </div>
//   );
// };

// export default FavoriteMovies;