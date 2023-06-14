import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllShoppingIngredients,
  fetchDeleteShoppingIngredient,
  fetchPostShoppingIngredient,

} from './shopThunks';

const initialState = {
  totalPages: null,
  shoppingIngredients: [],
  isLoading: false,
  error: null,
  newVariable: null,
};

const shoppingIngredientsSlice = createSlice({
  name: 'shoppingIngredients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchAllShoppingIngredients.fulfilled, (state, action) => {
        state.shoppingIngredients = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetchPostShoppingIngredient.fulfilled, (state, action) => {
        state.newVariable = action.payload._id;
      })

        .addCase(fetchDeleteShoppingIngredient.fulfilled, (state, action) => {
       
        const index = state.shoppingIngredients.shoppingList.findIndex(
          shoppingIngredients => shoppingIngredients._id === action.payload
        );
        state.shoppingIngredients.shoppingList.splice(index, 1);
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
          state.totalPages = null;
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

export default shoppingIngredientsSlice.reducer;
