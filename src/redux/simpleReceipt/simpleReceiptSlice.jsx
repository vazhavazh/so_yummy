import { createSlice } from '@reduxjs/toolkit';
import {fetchRecipe } from './simpleReceiptThunk';

const initialState = {
 
  simpleRecipe: [],
  isLoading: true,
  error: null,
};

const simpleRecipeSlice = createSlice({
  name: 'simpleRecipe',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.simpleRecipe = action.payload;
        state.isLoading = false;
        state.error = null;
      })


      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload ? action.payload : null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export default simpleRecipeSlice.reducer;
