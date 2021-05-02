import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
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
      if (response && response.data) {
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
      if (response.message === 'SUCCESS') {
          const messSuccess = () => {
            message.success('Update success');
            
           };
        messSuccess();        
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);
export const  deleteGroupChat= createAsyncThunk(
  'user/postupdateInforUser',
    async (payload, thunkAPI) => {
    try {
        const response = await fetch(`http://localhost:3098/api/group/delete?id=${payload}`, {
          method: 'GET',
          // body:  JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
      // if (response.message === 'SUCCESS') {
      //     const messSuccess = () => {
      //       message.success('Update success');
            
      //      };
      //   messSuccess();        
      //   return response;
      // }
      console.log(response,'đcko á')
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);