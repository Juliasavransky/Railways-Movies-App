import { getAllMovies } from '../../features/movies/movieSlice';
import { getPageNumber } from '../../features/movies/pageSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function MovieList() {
  const movies = useSelector(getAllMovies);
  const page = useSelector(getPageNumber);

  return <div>MovieList</div>;
}

export default MovieList;
