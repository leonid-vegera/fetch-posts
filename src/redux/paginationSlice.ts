import { createSlice } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number,
  postsPerPage: number,
}

const initialState: PaginationState = {
  currentPage: 1,
  postsPerPage: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice;