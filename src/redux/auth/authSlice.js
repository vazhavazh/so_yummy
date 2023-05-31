import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUser,
  getUserBalance,
  loginUser,
  logoutUser,
  registerUser,
} from './authThunks';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: '',
      username: '',
      email: '',
      balance: 0,
    },
    token: null,
    isLoading: true,
    isRefreshing: false,
    isModalAddTransactionOpen: false,
    error: null,
  },
  reducers: {
    balanceUpdate(state, action) {
      state.user.balance = action.payload;
    },
    setModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
  },
  extraReducers: {
    [registerUser.pending]: handlePending,
    [loginUser.pending]: handlePending,
    [getCurrentUser.pending]: handlePending,
    [logoutUser.pending]: handlePending,

    [registerUser.rejected]: handleRejected,
    [loginUser.rejected]: handleRejected,
    [getCurrentUser.rejected]: handleRejected,
    [logoutUser.rejected]: handleRejected,

    [registerUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: payload,
        error: null,
        isRefreshing: false,
      };
    },
    [getUserBalance.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: payload,
        error: null,
        isRefreshing: false,
      };
    },
    [getCurrentUser.pending]: (state, { payload }) => {
      return {
        ...state,
        error: null,
        isRefreshing: true,
      };
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isRefreshing: false,
      };
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      return {
        user: {
          id: '',
          username: '',
          email: '',
          balance: 0,
        },
        isLoading: false,
        error: null,
        isRefreshing: false,
        token: null,
      };
    },
  },
});

export const { balanceUpdate, setModalAddTransactionOpen } = authSlice.actions;

export default authSlice.reducer;
