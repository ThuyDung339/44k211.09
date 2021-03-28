import { createAsyncThunk } from '@reduxjs/toolkit';

export const getcurrencies = createAsyncThunk(
  'user/getcurrencies',
    async (payload, thunkAPI) => {
    try {
      const response = await fetch('https://proxibox-pharma-api-staging.enouvo.com/api/v1/admin/currencies', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
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
