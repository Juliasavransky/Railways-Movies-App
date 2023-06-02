import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import pageReducer from './pageSlice';
import selectedMoviesReducer from './selectedSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    page: pageReducer,
    selectedMovies: selectedMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
