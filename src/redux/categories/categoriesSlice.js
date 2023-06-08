import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchCurrentCategory } from './categoriesThanks';

export const categoriesSlice = createSlice({
  name: '@@categories',
  initialState: {
    categories: {
      categoriesTitle: [],
      currentCategories: [],
      error: null,
      loading: false,
    },
  },

  reducers: {
    loadCategories(state, action) {
      state.categories.categoriesTitle = action.payload;
    },
    loadCurrentCategory(state, action) {
      state.categories.currentCategories = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.categoriesTitle = action.payload;
      })
      .addCase(fetchCurrentCategory.fulfilled, (state, action) => {
        state.categories.currentCategories = action.payload;
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});
export const { loadCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
