import { getAllMovies } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Movie } from '../../utils/interfaces/interfaces';
import MovieCard from '../movieCard/MovieCard';
import style from './MovieList.module.css';

function MovieList() {
  const movies = useSelector(getAllMovies);
  const moviesToRender = movies.movies;
  return (
    <>
      <div className={style.container}>
        {movies ? (
          moviesToRender.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.overview}
              img={movie.backdrop_path}
            />
          ))
        ) : (
          <h1>Our cinema is closed for renovations today</h1>
        )}
      </div>
    </>
  );
}

export default MovieList;
