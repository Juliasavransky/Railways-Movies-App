import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FavoriteMovie = {
  movieTitle: string;
  movieId: number;
  isFavorite: boolean;
};

type InitialState = {
  favoriteMovies: FavoriteMovie[];
};

const initialState: InitialState = {
  favoriteMovies: [],
};

export const favoritesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,

  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteMovie>) => {
      const newMovie = action.payload;
      const existingMovie = state.favoriteMovies.find(
        (movie) => movie.movieId === newMovie.movieId
      );
      if (!existingMovie) {
        state.favoriteMovies.push({
          movieId: action.payload.movieId,
          movieTitle: action.payload.movieTitle,
          isFavorite: (action.payload.isFavorite = true),
        });
        console.log(state.favoriteMovies);
      } else {
        state.favoriteMovies = state.favoriteMovies.filter(
          (movie) => movie.movieId !== newMovie.movieId
        );
        //@ts-ignore
        state.favoriteMovies.isFavorite = action.payload.isFavorite = false;
        // isFavorite = false;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
