import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const instanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instanse.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instanse.defaults.headers.common['Authorization'];
};

export const signUp = createAsyncThunk(
  'auth/register',
  async (body, thuncAPI) => {
    try {
      const response = await instanse.post('/users/signup', body);
      setToken(response.data.token);
      toast.success('Success!');
      return response.data;
    } catch (error) {
      if (error.request.status === 400) {
        toast.error('This email already exists!');
        return thuncAPI.rejectWithValue(error.message);
      }
      toast.error('Oops! Something went wrong!');
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thuncAPI) => {
  try {
    const response = await instanse.post('/users/login', body);
    setToken(response.data.token);
    toast.success('Success!');
    return response.data;
  } catch (error) {
    if (error.request.status === 400) {
      toast.error('Invalid email address or password!');
      return thuncAPI.rejectWithValue(error.message);
    }
    toast.error('Oops! Something went wrong!');
    return thuncAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thuncAPI) => {
  try {
    const response = await instanse.post('/users/logout');
    deleteToken();
        toast.success('Success!');
    return response.data;
  } catch (error) {
        toast.error('Oops! Something went wrong!');
    return thuncAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thuncAPI) => {
    const state = thuncAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thuncAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const response = await instanse.get('/users/current');

      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
