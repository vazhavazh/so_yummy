import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllSearchedTitle,
  fetchAllSearchedIngredient,
} from './searchThunks';

const initialState = {
  totalPages: null,
  loading: false,
  error: null,
  searchData: null,
  selectedTypes: 'query',
  fromFooter: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelectedTypes: (state, action) => {
      state.selectedTypes = action.payload;
    },
    setFromFooter: (state, action) => {
      state.fromFooter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllSearchedTitle.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.searchData = null;
        state.totalPages = null;
        
      })
      .addCase(fetchAllSearchedTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.searchData = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAllSearchedTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllSearchedIngredient.pending, state => {
        state.loading = true;
        state.error = null;
        state.searchData = null;
        state.totalPages = null;
      })
      .addCase(fetchAllSearchedIngredient.fulfilled, (state, action) => {
        state.loading = false;
        state.searchData = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAllSearchedIngredient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedTypes, setFromFooter } = searchSlice.actions;
export default searchSlice.reducer;
