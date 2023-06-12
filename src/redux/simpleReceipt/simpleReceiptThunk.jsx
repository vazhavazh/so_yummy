import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipe = createAsyncThunk(
  'favoriteReceipt/fetchRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/recipes/${recipeId}`); // Вызов функции API для получения рецепта по идентификатору
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message); // Возвращаем сообщение об ошибке в случае неудачи
    }
  }
);
