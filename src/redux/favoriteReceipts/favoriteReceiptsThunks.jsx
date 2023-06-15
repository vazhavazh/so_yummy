import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllFavoriteReceipts = createAsyncThunk(
  'favoriteReceipts/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get('/api/favorites', {
        params: { page, limit },
      });
      return response.data;
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
