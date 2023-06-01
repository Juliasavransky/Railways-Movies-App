import { useEffect, useState } from 'react';
import style from './HomePage.module.css';
import { AxiosResponse } from 'axios';
import moviesApi from '../../utils/api/moviesApi';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../features/movies/movieSlice';
import MovieList from '../movieList/MovieList';
import { fetchPage } from '../../features/movies/pageSlice';
const apiKey = process.env.REACT_APP_MOVIES_KEY;

const HomePage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMoviesFromApi = async () => {
      setError(false);
      setLoading(true);

      try {
        const response: AxiosResponse<any> = await moviesApi.get(
          `?api_key=${apiKey}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`
        );
        dispatch(fetchMovies(response.data.results));
        dispatch(fetchPage(response.data.page));

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log('Error', error);
      }
    };
    fetchMoviesFromApi();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={style.home}>
          <MovieList />
        </div>
      )}
    </>
  );
};

export default HomePage;
