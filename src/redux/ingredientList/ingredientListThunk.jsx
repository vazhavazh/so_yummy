import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllIngredientList = createAsyncThunk(
  'shoppingIngredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/ingredients/list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
