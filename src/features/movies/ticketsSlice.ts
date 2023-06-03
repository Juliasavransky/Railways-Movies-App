import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  tickets: number;
};
const initialState: InitialState = {
  tickets: 0,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<number>) => {
      state.tickets += action.payload;
      return state;
    },
    removeTicket: (state, action: PayloadAction<number>) => {
      state.tickets -= action.payload;
      return state;
    },
  },
});

export const { addTicket, removeTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
