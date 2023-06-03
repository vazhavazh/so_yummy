import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAllIngredients,
  addIngredient,
  deleteIngredient,
} from './shoppingListOperations';

import { logout } from '../Auth/authOperations';

const extraActions = [fetchProducts, addProduct, deleteProduct, logout];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchProductsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const commonPendingReducer = state => {
  state.isLoading = true;
};

const addProductFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.items.push(action.payload);
};

const deleteProductFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.items.findIndex(item => item._id === action.payload.id);

  state.items.splice(index, 1);
};

const logoutFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
  state.items = [];
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.error = null;
  state.isLoading = false;
};

const shoppingListSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchProducts.fulfilled, fetchProductsFulfilledReducer)
      .addCase(addProduct.fulfilled, addProductFulfilledReducer)
      .addCase(deleteProduct.fulfilled, deleteProductFulfilledReducer)
      .addCase(logout.fulfilled, logoutFulfilledReducer)
      .addMatcher(
        isAnyOf(
          fetchProducts.pending,
          addProduct.pending,
          deleteProduct.pending,
          logout.pending
        ),
        commonPendingReducer
      )
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const shoppingListReducer = shoppingListSlice.reducer;
