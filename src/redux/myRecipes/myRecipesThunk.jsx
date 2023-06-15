import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchAllMyOwnRecipes = createAsyncThunk(
  'fetchAllMyOwnRecipes',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get('api/ownRecipes', {
        params: { page, limit },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMyOwnRecipe = createAsyncThunk(
  'myOwnRecipe/addRecipe',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/ownRecipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);



export const deleteMyOwnRecipe = createAsyncThunk(
  'ownRecipe/Delete',
  async (ownRecipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/ownRecipes/${ownRecipeId}`);
      if (response.status === 204) {
        toast.success('Recipe deleted successfully!', {});
        return ownRecipeId;
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
