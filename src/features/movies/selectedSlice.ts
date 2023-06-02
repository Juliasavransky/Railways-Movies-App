import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { SelectedMovie } from '../../utils/interfaces/interfaces';
import { AxiosResponse } from 'axios';
import moviesApi from '../../utils/api/moviesApi';
const apiKey = process.env.REACT_APP_MOVIES_KEY;

type ThunkApiConfig = {};
export const asyncFetchSelectedMoviesFromApi: AsyncThunk<
  SelectedMovie,
  void,
  ThunkApiConfig
> = createAsyncThunk(
  'selectedMovie/asyncFetchSelectedMoviesFromApi',
  async (id) => {
    const response: AxiosResponse<any> = await moviesApi.get(
      `/movie/${id}?api_key=${apiKey}`
    );
    return response.data as SelectedMovie;
  }
);

const initialState = {
  selectedMovie: {} as SelectedMovie,
};

export const selectedMoviesSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = {} as SelectedMovie;
    },
  },
  extraReducers: {
    [`${asyncFetchSelectedMoviesFromApi.pending}`]: () => {
      console.log('pending');
    },
    [`${asyncFetchSelectedMoviesFromApi.fulfilled}`]: (state, { payload }) => {
      console.log('fulfilled');
      return { ...state, selectedMovie: payload };
    },

    [`${asyncFetchSelectedMoviesFromApi.rejected}`]: () => {
      console.log('rejected');
    },
  },
});

export const { removeSelectedMovie } = selectedMoviesSlice.actions;

export const getSelectedMovie = (state: {
  selectedMovie: {
    map(
      arg0: (
        selectedMovie: SelectedMovie
      ) => import('react/jsx-runtime').JSX.Element
    ): import('react').ReactNode;
  };

  //@ts-ignore
}) => state.selectedMovies;

export default selectedMoviesSlice.reducer;
