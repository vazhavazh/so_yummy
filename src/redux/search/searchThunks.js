import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchAllIngredients = createAsyncThunk(
  'shoppingIngredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/search');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
