import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      return response.data;
    } catch (error) {
      console.log('first', thuncAPI.rejectWithValue(error.message));
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thuncAPI) => {
  try {
    const response = await instanse.post('/users/login', body);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    return thuncAPI.rejectWithValue(error.message);
  }
});


export const logOut = createAsyncThunk('auth/logout', async (_, thuncAPI) => {
  try {
    const response = await instanse.post('/users/logout');
    deleteToken();
    return response.data;
  } catch (error) {
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
