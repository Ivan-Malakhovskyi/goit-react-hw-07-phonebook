import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsApi } from './contactsSlice';
import { pokemonApi } from './pokemons';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],
});
