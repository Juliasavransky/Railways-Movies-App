import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import {
  Movie as Movies,
  SelectedMovie,
} from '../../utils/interfaces/interfaces';
import { AxiosResponse } from 'axios';
import moviesApi from '../../utils/api/moviesApi';
const apiKey = process.env.REACT_APP_MOVIES_KEY;

type ThunkApiConfig = {};
export const asyncFetchSelectedMoviesFromApi: AsyncThunk<
  Movies,
  void,
  ThunkApiConfig
> = createAsyncThunk('movie/asyncFetchSelectedMoviesFromApi', async (id) => {
  console.log('id in the tanck', id);

  const response: AxiosResponse<any> = await moviesApi.get(
    `/movie/${id}?api_key=${apiKey}`
  );
  return response.data as Movies;
});

const initialState = {
  selectedMovie: {} as SelectedMovie,
};

export const selectedMoviesSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    fetchSelectedMovies: (state, { payload }) => {
      state = { ...state, selectedMovie: payload };
      return state;
    },
  },
  extraReducers: {
    [`${asyncFetchSelectedMoviesFromApi.pending}`]: () => {
      console.log('pending');
    },
    [`${asyncFetchSelectedMoviesFromApi.fulfilled}`]: (state, { payload }) => {
      console.log(state.selectedMovie);
      return { ...state.selectedMovie, selectedMovie: payload };
    },
    [`${asyncFetchSelectedMoviesFromApi.rejected}`]: () => {
      console.log('rejected');
    },
  },
});

export const { fetchSelectedMovies } = selectedMoviesSlice.actions;

export const getSelectedMovie = (state: {
  selectedMovie: {
    map(
      arg0: (
        selectedMovie: SelectedMovie
      ) => import('react/jsx-runtime').JSX.Element
    ): import('react').ReactNode;
    selectedMovie: SelectedMovie;
  };
}) => state.selectedMovie;
export default selectedMoviesSlice.reducer;
