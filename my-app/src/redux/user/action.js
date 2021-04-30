import { createAsyncThunk } from '@reduxjs/toolkit';

export const getInforUser = createAsyncThunk(
  'user/getInforUser',
    async (payload, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3098/api/user/userInfo', {
        method: 'GET',
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
          token: `${localStorage.getItem('token')}`
          }
        }).then(res => res.json())
      if (response) {
        console.log(response,'response nè')
        return response;
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
      console.log(payload,'payload tạo nhóm nè')
    try {
        const response = await fetch('http://localhost:3098/api/group/add', {
            method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
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
