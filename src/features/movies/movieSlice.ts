// import { createSlice } from '@reduxjs/toolkit';
// import { Movie } from '../../utils/interfaces/interfaces';

// const initialState = {
//   movies: [] as Movie[],
// };

// export const movieSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     fetchMovies: (state, { payload }) => {
//       return payload;
//     },
//   },
// });

// export const { fetchMovies } = movieSlice.actions;
// export const getAllMovies = (state: { movies: { movies: Movie[] } }) =>
//   state.movies.movies;
// export default movieSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../utils/interfaces/interfaces';

const initialState = {
  movies: [] as Movie[],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { fetchMovies } = movieSlice.actions;
export const getAllMovies = (state: {
  movies: {
    [x: string]: any;
    movies: Movie[];
  };
}) => state.movies;
export default movieSlice.reducer;
