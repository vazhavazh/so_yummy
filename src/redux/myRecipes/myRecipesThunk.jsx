import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllMyOwnRecipes = createAsyncThunk(
  'fetchAllMyOwnRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/ownRecipes');
      console.log(response.data);
      return response.data;
      
    } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMyOwnRecipe = createAsyncThunk(
  'myOwnRecipe/addRecipe',
  async formData => {
    try {
      const response = await axios.post('/api/ownRecipes', formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);