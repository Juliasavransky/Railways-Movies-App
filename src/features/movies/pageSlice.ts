import { createSlice } from '@reduxjs/toolkit';
import { Page } from '../../utils/interfaces/interfaces';

const initialState = {
  page: 0,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    fetchPage: (state, { payload }) => {
      state.page = payload.page;
    },
  },
});

export const { fetchPage } = pageSlice.actions;

export const getPageNumber = (state: { page: { page: Page } }) =>
  state.page.page;
export default pageSlice.reducer;
