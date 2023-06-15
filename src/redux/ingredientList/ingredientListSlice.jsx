import { createSlice } from '@reduxjs/toolkit';
import { fetchAllIngredientList } from './ingredientListThunk';


const initialState = {
  ingredientList: [],
  isLoading: false,
  error: null,
};

const ingredientListSlice = createSlice({
  name: 'ingredientList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllIngredientList.fulfilled, (state, action) => {
        state.ingredientList = action.payload;
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

export default ingredientListSlice.reducer;
