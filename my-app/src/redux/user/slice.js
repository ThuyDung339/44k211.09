import { createSlice } from '@reduxjs/toolkit';
import { getInforUser,getRoomAction } from './action';

export const initialState = {
  pending: false,
  listRoomchat:[],

};

const { reducer } = createSlice({
  name: 'User',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getInforUser.fulfilled]: (state, { payload }) => {
      state.inforUser=payload
    },
    [getInforUser.rejected]: state => {
    },
    [getInforUser.pending]: state => {
      state.pending = true
    },
    [getRoomAction.fulfilled]: (state, { payload }) => {
      state.listRoomchat=payload?.rows
    },
  }
});

export default reducer;
