import { useEffect, useState } from 'react';
import style from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import MovieList from '../movieList/MovieList';
import { asyncFetchMoviesFromApi } from '../../features/movies/movieSlice';
import { BreakPoints } from '../../utils/interfaces/interfaces';

const HomePage = () => {
  const breakPoints: BreakPoints = {
    mobile: '(max-width:600px)',
    tablet: '(min-width:600px) and (max-width:900px)',
    laptop: '(min-width:901px) and (max-width:1281px)',
    desktop: '(min-width:1282px)',
  };
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // const matches = useMediaQuery(breakPoints.mobile);

  useEffect(() => {
    setLoading(true);
    //@ts-ignore
    dispatch(asyncFetchMoviesFromApi(pageNumber));
    setLoading(false);
  }, [pageNumber, dispatch]);

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
function useMediaQuery(mobile: string) {
  throw new Error('Function not implemented.');
}
