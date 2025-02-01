import {useLocation} from 'react-router-dom';
import { useMovieLikes } from '../store/likeState';
const MovieDetails = () => {
  const location = useLocation();

  const likeCount = useMovieLikes((state) => state.likeCount)
console.log("location state: ",location.state)
  if(!location.state){
    return <h1> No State Available</h1>
  }
  return (
<div className="flex flex-row items-start justify-between p-4">
  <img
    className="rounded-lg mr-8"
    src={`http://localhost:8080/${location.state.image}`}
    alt="Movie Thumbnail"
    style={{ height: '400px', width: '400px', padding: '30px' }}
  />
  <div className="relative" style={{ marginTop: '20px', marginLeft: '-10px' }}>
    <h1 className="text-4xl mb-4 font-bold text-gray-800">{location.state.title} {likeCount} likes </h1>
    
    <p className="text-lg text-gray-600">{location.state.description}</p>
    <p className="director">{location.state.director}</p>
    <p className="text-lg text-gray-600">{location.state.writers}</p>
    <p className="text-lg text-gray-600">{location.state.stars}</p>

  </div>
</div>





  ) ;
};

export default MovieDetails;