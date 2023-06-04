import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAuthHeader } from '../../api';
import { balanceUpdate } from 'redux/auth/authSlice';

export const fetchAllShoppingIngredients = createAsyncThunk(
  'shoppingIngredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        setAuthHeader(token);
        const response = await axios.get('/api/shopping-lit');

        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddShoppingIngredients = createAsyncThunk(
  'shoppingIngredients/fetchAdd',
  async (credentials, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.post('/api/shopping-lit', credentials);
    
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteShoppingIngredients = createAsyncThunk(
  'shoppingIngredients/fetchDelete',
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/shopping-list/${ingredientId}`);
      if (response.status === 204) {
        toast.success('Ingredient deleted successfully!', {
          className: 'custom-toast',
        });
        return ingredientId;
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

export const fetchUpdateShoppingIngredients = createAsyncThunk(
  'shoppingIngredients/fetchUpdate',
  async ({ ingredientId, credentials }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/shopping-list/${ingredientId}`,
        credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
