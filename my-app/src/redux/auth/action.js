import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://nana-wanna.herokuapp.com/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(payload),
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem('token')}`
          //   }
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      if (response.message === "SUCCESS") {
        localStorage.setItem("token", response.data);
        const messSuccess = () => {
          message.success("Login success ");
        };
        messSuccess();
        return response;
        //chuyển sang trang chủ
      }
      const messError = () => {
        message.error(response.message);
      };
      messError();
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const Register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://nana-wanna.herokuapp.com/api/user/register",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      if (response.message === "SUCCESS") {
        const messSuccess = () => {
          message.success("Register success ");
        };
        messSuccess();
        return response;
      } else {
        const messError = () => {
          message.error(response.message);
        };
        messError();
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);

function resolveAfter2Seconds() {
  const a = "logout-success";
  return a;
}

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    try {
      const response = await resolveAfter2Seconds();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const registerActionRedirect = createAsyncThunk(
  "auth/registers",
  async (payload, thunkAPI) => {
    try {
      const response = await resolveAfter2Seconds();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
