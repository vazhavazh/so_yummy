import { createSlice } from '@reduxjs/toolkit';
import { fetchMyOwnRecipe } from './pipkaThunk';

const initialState = {
  pipka: {},
  isLoading: true,
  error: null,
};

const pipka = createSlice({
  name: 'pipka',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchMyOwnRecipe.fulfilled, (state, action) => {
        state.pipka = action.payload;

        state.isLoading = false;
        state.error = null;
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload ? action.payload : null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export default pipka.reducer;
