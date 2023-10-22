import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanse } from './auth/authOperations';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thuncAPI) => {
    try {
      const response = await instanse.get('/contacts');
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thuncAPI) => {
    try {
      const response = await instanse.post('/contacts', body);
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (id, thuncAPI) => {
    try {
      const response = await instanse.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
