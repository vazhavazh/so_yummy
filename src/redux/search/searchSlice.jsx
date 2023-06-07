import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllSearchedTitle,
  fetchAllSearchedIngredient,
} from './searchThunks';

const initialState = {
  loading: false,
  error: null,
  searchData: null,
  selectedTypes: 'query',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelectedTypes: (state, action) => {
      state.selectedTypes = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllSearchedTitle.pending, state => {
        state.loading = true;
        state.error = null;
        state.searchData = null;
      })
      .addCase(fetchAllSearchedTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.searchData = action.payload;
      })
      .addCase(fetchAllSearchedTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllSearchedIngredient.pending, state => {
        state.loading = true;
        state.error = null;
        state.searchData = null;
      })
      .addCase(fetchAllSearchedIngredient.fulfilled, (state, action) => {
        state.loading = false;
        state.searchData = action.payload;
      })
      .addCase(fetchAllSearchedIngredient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedTypes } = searchSlice.actions;
export default searchSlice.reducer;
