import { createSlice } from '@reduxjs/toolkit';
import { getcurrencies } from './action';

export const initialState = {
    a: false,
    pending: false,

};

const { reducer } = createSlice({
  name: 'User',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getcurrencies.fulfilled]: state => {
    },
    [getcurrencies.rejected]: state => {
    },
    [getcurrencies.pending]: state => {
      state.pending = true
    }
  }
});

export default reducer;
