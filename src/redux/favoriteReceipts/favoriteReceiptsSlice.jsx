import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllFavoriteReceipts,
  fetchUpdateFavoriteReceipts,
} from './favoriteReceiptsThunks';

const initialState = {
  favoriteReceipts: [],
  isLoading: true,
  error: null,
};

const favoriteReceiptSlice = createSlice({
  name: 'favoriteReceipt',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllFavoriteReceipts.fulfilled, (state, action) => {
        state.favoriteReceipts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUpdateFavoriteReceipts.fulfilled, (state, action) => {
        const updatedReceiptId = action.payload._id;

        state.favoriteReceipts = state.favoriteReceipts.filter(
          receipt => receipt._id !== updatedReceiptId
        );
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

export default favoriteReceiptSlice.reducer;
