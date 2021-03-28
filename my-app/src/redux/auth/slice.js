import { createSlice } from '@reduxjs/toolkit';
import { login } from './action';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  // isAuthenticated: true,
  dataUser: {
    _id: '',
    email: '',
    password:''
  },
  role: null,
  loginError: false,
  loginSuccess: false,
  permissionData: null,
  pending: false
};

const { reducer } = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [login.fulfilled]: state => {
      state.isAuthenticated = true
    },
    [login.rejected]: state => {
      state.isAuthenticated = false
    },
    [login.pending]: state => {
      state.pending = true
    }
  }
});

export default reducer;
