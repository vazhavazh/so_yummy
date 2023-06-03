import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.BASE_URL;

export const fetchAllIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/shopping-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addIngredient = createAsyncThunk(
  'ingredients/addIngredient',
  async ({ image, name, quantity }, thunkAPI) => {
    try {
      const response = await axios.post('/shopping-list', {
        image,
        name,
        quantity,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteIngredient = createAsyncThunk(
  'ingredients/deleteIngredient',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/shopping-list/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { isLoading } = getState().isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);
