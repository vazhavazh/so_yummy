import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: false,
  },
  reducers: {
    toggleSearch: state => {
      state.search = !state.search;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;