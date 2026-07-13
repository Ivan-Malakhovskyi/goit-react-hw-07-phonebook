import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6a4e600de785c9ef536cbd48.mockapi.io/';

export const serviceContacts = createAsyncThunk(
  'contacts/serviceAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(contactId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeValueFilter = createAsyncThunk(
  'filter/changeValueFilter',
  async (task, thunkAPI) => {
    try {
      const response = await axios.patch(`contacts/${task.id}`);
      return response.data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error.message);
    }
  }
);
