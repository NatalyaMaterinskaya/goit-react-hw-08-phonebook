import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const privateInstanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const publicInstanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  privateInstanse.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete privateInstanse.defaults.headers.common['Authorization'];
};

export const singUp = createAsyncThunk(
  'auth/register',
  async (body, thuncAPI) => {
    try {
      const response = await publicInstanse.post('/users/signup', body);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thuncAPI) => {
  try {
    const response = await publicInstanse.post('​/users​/login', body);
    setToken(response.data.token);
    return response.data;
  } catch (error) {
    return thuncAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thuncAPI) => {
  try {
    const response = await privateInstanse.post('/users/logout');
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
      const response = await privateInstanse.get('/users/current');
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
