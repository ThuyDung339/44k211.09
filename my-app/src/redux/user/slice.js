import { createSlice } from '@reduxjs/toolkit';
import { getInforUser } from './action';

export const initialState = {
    pending: false,

};

const { reducer } = createSlice({
  name: 'User',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getInforUser.fulfilled]: state => {
    },
    [getInforUser.rejected]: state => {
    },
    [getInforUser.pending]: state => {
      state.pending = true
    }
  }
});

export default reducer;
