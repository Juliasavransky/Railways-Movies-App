import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncFetchSelectedMoviesFromApi,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../features/movies/selectedSlice';
import adult from '../../utils/icons/no_adult.svg';
import style from './MovieDetails.module.css';
import ticket from '../../utils/icons/ticket.svg';

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
  //@ts-ignore
  const { tickets } = useSelector((state) => state.tickets);

  return (
    <>
      {loading ? (
        <h1>Lodging....</h1>
      ) : (
        <div className={style.container}>
          <div>
            <h1>Bay Tickets now</h1>
            <div>Title: {detailsForRender.title}</div>
            <div>Summery: {detailsForRender.overview}</div>
            <div>Released in: {detailsForRender.release_date}</div>
            {detailsForRender.adult === false ? (
              <img src={adult} alt='Adult icon' />
            ) : (
              <h1>not in front of the children </h1>
            )}
            <div>
              <div>bay tickets now</div>
              <img src={ticket} alt='cart icon' />
              <div>number of tickets: {tickets} </div>
              <button onClick={() => console.log('cvhm')}>+1</button>
              <button onClick={() => console.log('sdgn')}>-1</button>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${detailsForRender.poster_path}`}
            alt='Movie Poster'
          />
        </div>
      )}
    </>
  );
}

export default MovieDetails;
