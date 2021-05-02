import { createSlice } from '@reduxjs/toolkit';
import { login,logoutAction,Register, registerActionRedirect } from './action';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  // isAuthenticated: true,
  role: null,
  loginError: false,
  loginSuccess: false,
  permissionData: null,
  pending: false,
  isRegisterSuccess:false
};

const { reducer } = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload})  => {
      state.isAuthenticated = true
    },
    [login.rejected]: (state,{payload})=> {
      state.isAuthenticated = false
      state.pending = false
      state.messageError= payload.message
    },
    [login.pending]: state => {
      state.pending = true
    },
    [logoutAction.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = false
      state.pending = false  
    },
    [Register.rejected]: (state,{payload})=> {
      state.isAuthenticated = false
      state.pending = false
    },
    [Register.fulfilled]: (state,{payload})=> {
      state.isAuthenticated = false
      state.isRegisterSuccess= true
    },
    [registerActionRedirect.fulfilled]: (state,{payload})=> {
      state.isRegisterSuccess= false
    },    
  }
});

export default reducer;
