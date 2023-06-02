import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncFetchSelectedMoviesFromApi,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../features/movies/selectedSlice';
import adult from '../../utils/icons/no_adult.svg';

function MovieDetails() {
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const movieId = Number(params.id);
  const dispatch = useDispatch();

  const selectedMovieDetails = useSelector(getSelectedMovie);
  const detailsForRender = selectedMovieDetails.selectedMovie;

  useEffect(() => {
    setLoading(true);
    //@ts-ignore
    dispatch(asyncFetchSelectedMoviesFromApi(movieId));
    setLoading(false);

    return () => {
      dispatch(removeSelectedMovie);
    };
  }, [dispatch, movieId]);

  return (
    <>
      {loading ? (
        <div>Lodging....</div>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${detailsForRender.poster_path}`}
            alt='Movie Poster'
          />
          <div>{detailsForRender.title}</div>
          <div>{detailsForRender.overview}</div>
          <div>{detailsForRender.release_date}</div>
          {detailsForRender.adult === false ? (
            <img src={adult} alt='Adult icon' />
          ) : (
            <h1>not in front of the children </h1>
          )}
        </>
      )}
    </>
  );
}

export default MovieDetails;
