import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncFetchSelectedMoviesFromApi,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../features/movies/selectedSlice';
import { addTicket, removeTicket } from '../../features/movies/ticketsSlice';
import adult from '../../utils/icons/no_adult.svg';
import style from './MovieDetails.module.css';
import ticket from '../../utils/icons/ticket.svg';
import { useAppSelector } from '../../utils/hooks/hooks';
import { getAllPurchases } from '../../features/movies/purchaseSlice';

function MovieDetails() {
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const movieId = Number(params.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedMovieDetails = useSelector(getSelectedMovie);
  const detailsForRender = selectedMovieDetails.selectedMovie;
  const { tickets: numberOfTickets } = useAppSelector(
    (state: { tickets: any }) => state.tickets
  );

  const handlePurchase = () => {
    navigate('/thankYouForBuying');
    dispatch(
      getAllPurchases({
        movieTitle: detailsForRender.title,
        ticketsAmount: numberOfTickets,
        dateOfPurchase: today,
        movieId: movieId,
      })
    );
    console.log('thankYouForBuying');
  };

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear());

  const today = `${day}/${month}/${year}`;
  console.log(today);

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
              <img onClick={handlePurchase} src={ticket} alt='cart icon' />
              <div>
                number of tickets: {numberOfTickets > 0 ? numberOfTickets : 0}{' '}
              </div>
              <button onClick={() => dispatch(addTicket(1))}>+1</button>
              <button onClick={() => dispatch(removeTicket(1))}>-1</button>
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
