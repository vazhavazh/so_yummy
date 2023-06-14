import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMyOwnRecipe = createAsyncThunk(
  'favoriteReceipt/fetchRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/ownRecipes/${recipeId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
