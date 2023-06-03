import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://so-yummy-mg49.onrender.com',
});

const setToken = token => {
  if (token) {
    return (baseURL.defaults.headers.authorization = `Bearer ${token}`);
  }
  baseURL.defaults.headers.authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const resp = await baseURL.post('api/auth/register', credentials);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const resp = await baseURL.post('api/auth/login', credentials);
      setToken(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setToken(token);
    try {
      const resp = await baseURL.get('api/auth/current');
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await baseURL.post('api/auth/logout');
    setToken();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/edit',
  async (data, thunkAPI) => {
    try {
      const resp = await baseURL.patch('api/auth/edit', data);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const subscribe = createAsyncThunk(
  'auth/subscribe',
  async (email, thunkAPI) => {
    try {
      const resp = await baseURL.post('api/subscribe', email);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

//!____________________________________
// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { setAuthHeader, clearAuthHeader } from '../../api';
// const { createAsyncThunk } = require('@reduxjs/toolkit');

// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (form, { rejectWithValue }) => {
//     try {
//       const {
//         data: { user, token },
//       } = await axios.post(`/api/auth/sign-up`, form);

//       setAuthHeader(token);
//       return { user, token };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/signin',
//   async (form, { rejectWithValue }) => {
//     try {
//       const {
//         data: { user, token },
//       } = await axios.post(`/api/auth/sign-in`, form);

//       setAuthHeader(token);
//       return { user, token };
//     } catch (error) {
//       Notify.failure('Incorect email or password');
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     const { token } = getState().auth;

//     if (!token) {
//       return rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(token);
//       const { data } = await axios.get(`/api/users/current`, token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue, getState }) => {
//     const { token } = getState().auth;
//     try {
//       setAuthHeader(token);
//       const { data } = await axios.delete(`/api/auth/sign-out`, token);
//       clearAuthHeader();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
