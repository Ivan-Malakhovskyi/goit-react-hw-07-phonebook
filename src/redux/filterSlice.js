import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeValueFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { changeValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
