import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;



export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
