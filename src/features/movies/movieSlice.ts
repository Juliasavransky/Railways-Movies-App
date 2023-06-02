import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { Movie as Movies } from '../../utils/interfaces/interfaces';
import { AxiosResponse } from 'axios';
import moviesApi from '../../utils/api/moviesApi';
const apiKey = process.env.REACT_APP_MOVIES_KEY;

type ThunkApiConfig = {};
export const asyncFetchMoviesFromApi: AsyncThunk<
  Movies[],
  void,
  ThunkApiConfig
> = createAsyncThunk('movies/asyncFetchMoviesFromApi', async (pageNumber) => {
  const response: AxiosResponse<any> = await moviesApi.get(
    `discover/movie?api_key=${apiKey}&include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc`
  );
  return response.data.results as Movies[];
});

const initialState = {
  movies: [] as Movies[],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies: (state, { payload }) => {
      state = { ...state, movies: payload };
      return state;
    },
  },

  extraReducers: {
    [`${asyncFetchMoviesFromApi.pending}`]: () => {
      console.log('pending');
    },
    [`${asyncFetchMoviesFromApi.fulfilled}`]: (state, { payload }) => {
      console.log('fulfilled');
      return { ...state, movies: payload };
    },
    [`${asyncFetchMoviesFromApi.rejected}`]: () => {
      console.log('rejected');
    },
  },
});

export const { fetchMovies } = movieSlice.actions;

export const getAllMovies = (state: {
  movies: {
    length: number;
    map(
      arg0: (movie: Movies) => import('react/jsx-runtime').JSX.Element
    ): import('react').ReactNode;
    movies: Movies[];
  };
}) => state.movies;

export default movieSlice.reducer;
