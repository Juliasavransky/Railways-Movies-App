import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import selectedMoviesReducer from './selectedSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovies: selectedMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
