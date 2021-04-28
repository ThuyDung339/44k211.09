import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
    async (payload, thunkAPI) => {
    try {
      const response = await fetch('https://proxibox-pharma-api-staging.enouvo.com/api/v1/admin/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        //   }
        }).then(res => res.json())
      if (response) {
        //setstate(username={res.fullname})
        console.log(response,'res')
        localStorage.setItem('token', response.token);
        localStorage.setItem('fullName', response.email);
        localStorage.setItem('id', response.id);
        console.log(response,'response nè')
        return response;
        //chuyển sang trang chủ
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);

export const Register = createAsyncThunk(
  'auth/register',
    async (payload, thunkAPI) => {
      console.log(payload,'payload nè')
    try {
        const response = await fetch('http://localhost:3098/api/user/register', {
            method: 'POST',
          body: JSON.stringify(payload),
          headers: {
              'Content-Type': 'application/json'
            }
        }).then(res => res.json())
      if (response) {
//chuyển sang trang login
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error,'error')
      return thunkAPI.rejectWithValue();
    }
  },
);
