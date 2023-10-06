// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const { createSlice } = require('@reduxjs/toolkit');
// const { nanoid } = require('nanoid');

// const contactsInitialState = {
//   list: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         state.list.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact: {
//       reducer(state, action) {
//         state.list = state.list.filter(
//           contact => contact.id !== action.payload
//         );
//       },
//     },
//   },
// });

// export const { addContacts, deleteContact } = contactsSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, serviceContacts } from './operations';

const handelPending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [serviceContacts.pending]: handelPending,
    [serviceContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [serviceContacts.rejected]: handleRejected,
    [addContact.pending]: handelPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handelPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// const idx = state.items.findIndex(
//   contact => contact.id === action.payload
// );
// state.items.splice(idx, 1);
