import { useEffect, useState } from 'react';
import style from './HomePage.module.css';
import { AxiosResponse } from 'axios';
import moviesApi from '../../utils/api/moviesApi';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../features/movies/movieSlice';
import MovieList from '../movieList/MovieList';
import { Movie } from '../../utils/interfaces/interfaces';

const apiKey = process.env.REACT_APP_MOVIES_KEY;

const HomePage = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const fetchMoviesFromApi = async () => {
      setError(false);
      setLoading(true);

      try {
        const response: AxiosResponse<any> = await moviesApi.get(
          `?api_key=${apiKey}&include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc`
        );
        dispatch(fetchMovies(response.data.results));

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log('Error', error);
      }
    };
    fetchMoviesFromApi();
  }, [dispatch, pageNumber]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPageNumber((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log(pageNumber);

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
