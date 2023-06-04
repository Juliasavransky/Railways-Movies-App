import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from './../../utils/interfaces/interfaces';

export type MoviesPurchase = {
  movieTitle: string;
  dateOfPurchase: string;
  ticketsAmount: number;
  movieId: number;
};

type InitialState = {
  moviesPurchase: MoviesPurchase[];
};

const initialState: InitialState = {
  moviesPurchase: [],
};

export const purchaseSlice = createSlice({
  name: 'moviesPurchase',
  initialState,
  reducers: {
    getAllPurchases: (state, action: PayloadAction<MoviesPurchase>) => {
      state.moviesPurchase = [...state.moviesPurchase, action.payload];
      console.log(state.moviesPurchase);
      return state;
    },
  },
});

export const { getAllPurchases } = purchaseSlice.actions;
export default purchaseSlice.reducer;
