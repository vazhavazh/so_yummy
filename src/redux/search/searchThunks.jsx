import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFromFooter } from './searchSlice';

export const fetchAllSearchedTitle = createAsyncThunk(
  'recipeByTittle/get',
  async ({ wordQuery, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/search?title=${encodeURIComponent(
          wordQuery
        )}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllSearchedIngredient = createAsyncThunk(
  'recipeByIngredient/get',
  async ({ wordQuery, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/search?ingredient=${encodeURIComponent(
          wordQuery
        )}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFromFooterState = fromFooter => dispatch => {
  dispatch(setFromFooter(fromFooter));
};
