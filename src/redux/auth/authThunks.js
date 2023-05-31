import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { setAuthHeader, clearAuthHeader } from '../../api';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registerUser = createAsyncThunk(
  'auth/registration',
  async (form, { rejectWithValue }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/api/auth/sign-up`, form);

      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (form, { rejectWithValue }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/api/auth/sign-in`, form);

      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      Notify.failure('Incorect email or password');
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;

    if (!token) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get(`/api/users/current`, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserBalance = createAsyncThunk(
  'auth/currentBalance',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    if (!token) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get(`/api/users/current`, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    try {
      setAuthHeader(token);
      const { data } = await axios.delete(`/api/auth/sign-out`, token);
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
