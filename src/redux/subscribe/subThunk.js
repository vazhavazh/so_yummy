import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const subscribe = createAsyncThunk(
  'subscribe/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const data = await axios.post(`/api/subscribe/`, email);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        Notify.failure('Only registered users can subscribe');
      }
      if (error.response.status === 409) {
        Notify.failure('User is subscribed already');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const unSubscribe = createAsyncThunk(
  'unSub/unSub',

  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/subscribe/${_id}`);
      return Notify.info('You are not subscribed anymore');
    } catch (error) {
      if (error.response.status === 404) {
        Notify.failure('This user is not subscribed');
      }
      return rejectWithValue(error.message);
    }
  }
);
