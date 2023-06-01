import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
