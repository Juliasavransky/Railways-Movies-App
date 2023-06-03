import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import selectedMoviesReducer from './selectedSlice';
import ticketsReducer from './ticketsSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovies: selectedMoviesReducer,
    tickets: ticketsReducer,
    favoriteMovies: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
