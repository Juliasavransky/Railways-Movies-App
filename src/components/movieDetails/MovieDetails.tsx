import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncFetchSelectedMoviesFromApi,
  getSelectedMovie,
} from '../../features/movies/selectedSlice';

function MovieDetails() {
  const params = useParams();
  const movieId = Number(params.id);

  const dispatch = useDispatch();
  const selectedMovieDetails = useSelector(getSelectedMovie);

  const test = selectedMovieDetails.selectedMovie;
  console.log(test);

  useEffect(() => {
    //@ts-ignore
    dispatch(asyncFetchSelectedMoviesFromApi(movieId));
  }, [dispatch, movieId]);

  return <div>MovieDetails</div>;
}

export default MovieDetails;
