import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchAllSearchedTitle = createAsyncThunk(
  'recipeByTittle/get',
  async (title, thunkAPI) => {
    try {
      const response = await axios.get(`api/search?title=${encodeURIComponent(title)}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllSearchedIngredient = createAsyncThunk(
  'recipeByIngredient/get',
  async (ingredient, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/search?ingredient=${encodeURIComponent(ingredient)}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);