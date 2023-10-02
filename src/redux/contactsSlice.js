import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

const contactsInitialState = {
  list: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.list = state.list.filter(
          contact => contact.id !== action.payload
        );
      },
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

// const contactsAction = createAction("contacts/addContacts")
// const contactsAction1 = createAction("contacts/addContacts")

// const contactsReducer2 = createReducer(contactsInitialState, (builder) => builder
//     .addCase(contactsAction, (state, action) => { })
//     .addCase(contactsAction1, (state, action) => { })
// )

// export default contactsReducer2
