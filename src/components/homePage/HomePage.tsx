import { useEffect, useState } from 'react';
import style from './HomePage.module.css';
import { AxiosResponse } from 'axios';
import moviesApi from '../../utils/api/moviesApi';
const apiKey = process.env.REACT_APP_MOVIES_KEY;

interface Movie {
  adult: string;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface Page {
  page: number;
}
const HomePage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [moviesData, setMoviesData] = useState<Movie[] | undefined>(undefined);
  const [pageNumber, setPageNumber] = useState<Page | undefined>(undefined);

  useEffect(() => {
    const fetchMovies = async () => {
      setError(false);
      setLoading(true);

      try {
        const response: AxiosResponse<any> = await moviesApi.get(
          `?api_key=${apiKey}`
        );
        setMoviesData((await response.data.results) as Movie[]);
        setPageNumber((await response.data.page) as Page);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log('Error', error);
      }
    };
    fetchMovies();
  }, []);

  console.log(moviesData);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={style.home}>
          {moviesData?.map((movie: any) => (
            <div>{movie.title}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
