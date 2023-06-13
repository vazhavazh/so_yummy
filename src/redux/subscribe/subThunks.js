import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const subscribe = createAsyncThunk(
  'subscribe/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const data = await axios.post(`/api/subscribe/`, email);
      console.log(data);
      if (data.status === 201) {
        Notify.success('Subscribed');
      }
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
