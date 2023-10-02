const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
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

//* Blacklist & Whitelist

//Щоб зберегти все крім одного - blacklist: ['navigation]
//Щоб зберегти тільки одне з багатьох - whitelist: ['navigation]
