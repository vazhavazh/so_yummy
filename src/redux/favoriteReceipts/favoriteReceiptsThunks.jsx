import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAllFavoriteReceipts = createAsyncThunk(
  'shoppingIngredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {

        const response = await axios.get('/api/favorites');

        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const fetchUpdateFavoriteReceipts = createAsyncThunk(
  'favoriteReceipts/fetchUpdate',
  async (receiptId, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/favorites/${receiptId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
