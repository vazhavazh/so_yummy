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
  async formData => {
    try {
      const response = await axios.post('/api/ownRecipes', formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
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
