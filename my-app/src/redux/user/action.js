import { createAsyncThunk } from '@reduxjs/toolkit';
export const getInforUser = createAsyncThunk(
  'user/getInforUser',
    async (payload, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3098/api/user/userInfo', {
        method: 'GET',
        headers: {
          token: `${localStorage.getItem('token')}`
          }
        }).then(res => res.json())
      if (response) {
      localStorage.setItem('user-infor',  JSON.stringify(response.data ));
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);

export const postCreateGroup = createAsyncThunk(
  'user/postCreateGroup',
    async (payload, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3098/api/group/add', {
          method: 'POST',
          body: payload,
          headers: {
            Authorization: `token ${localStorage.getItem('token')}`,
            token: `${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
      if (response) {
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);

export const postupdateInforUser = createAsyncThunk(
  'user/postupdateInforUser',
    async (payload, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3098/api/user/update', {
          method: 'POST',
          body:  JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
      if (response.message==='SUCCESS') {
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);