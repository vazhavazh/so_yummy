import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAllShoppingIngredients = createAsyncThunk(
  'shoppingIngredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        const response = await axios.get('/api/shopping-list');

        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteShoppingIngredient = createAsyncThunk(
  'shoppingIngredient/fetchDelete',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.delete('/api/shopping-list', {
        data: { _id: ingredient._id },
      });
      if (response.status === 204) {
        return ingredient._id;
      } else {
        return;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);
