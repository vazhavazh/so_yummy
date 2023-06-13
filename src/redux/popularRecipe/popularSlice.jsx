import { createSlice } from '@reduxjs/toolkit';
import { fetchPopularRecipes } from './popularThunks';

const initialState = {
  popularRecipe: [],
  isLoading: false,
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchPopularRecipes.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularRecipes.fulfilled, (state, { payload }) => {
        state.popularRecipe = payload.data;
        state.isLoading = false;
      })
      .addCase(fetchPopularRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const popularReducer = popularSlice.reducer;
