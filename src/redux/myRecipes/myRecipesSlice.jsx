import { createSlice } from '@reduxjs/toolkit';
import { fetchAllMyOwnRecipes, addMyOwnRecipe } from './myRecipesThunk';

const initialState = {
  totalPages: null,
  myOwnRecipes: [],
  isLoading: true,
  error: null,
};

const myOwnRecipesSlice = createSlice({
  name: 'myOwnRecipes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllMyOwnRecipes.fulfilled, (state, action) => {
        state.totalPages = action.payload.totalPages;
        state.myOwnRecipes = action.payload.data;
        state.error = null;
      })

      .addCase(addMyOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myOwnRecipes.push(action.payload);
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

export default myOwnRecipesSlice.reducer;
