import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { setAuthHeader, clearAuthHeader } from '../../api';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registerUser = createAsyncThunk(
  'auth/registration',
  async ({ rejectWithValue, ...userData }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/api/auth/register`, userData);

      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      if (error.response.status === 409) {
        Notify.failure('User is already registered');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/signin',
  async ({ rejectWithValue, ...userData }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/api/auth/login`, userData);

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
      const { data } = await axios.get(`/api/auth/current`, token);
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
      const { data } = await axios.post(`/api/auth/logout`, token);
      clearAuthHeader();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'auth/edit',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/api/auth/edit`, userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      if (error.response.data.message === '"name" is not allowed to be empty') {
        Notify.failure('Please enter the name');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const google = createAsyncThunk(
  'auth/google',
  async ({ rejectWithValue, ...data }) => {
    try {
      setAuthHeader(data.token);
      return { user: data.user, token: data.token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
