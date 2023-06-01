import { createSlice } from '@reduxjs/toolkit';
import { Page } from '../../utils/interfaces/interfaces';

const initialState = {
  page: undefined,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    fetchPage: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { fetchPage } = pageSlice.actions;

export const getPageNumber = (state: { page: { page: Page } }) => state.page;
export default pageSlice.reducer;
