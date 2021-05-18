import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
export const getInforUser = createAsyncThunk(
  "user/getInforUser",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://nana-wanna.herokuapp.com/api/user/userInfo",
        {
          method: "GET",
          headers: {
            token: `${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json());
      if (response && response.data) {
        localStorage.setItem("user-infor", JSON.stringify(response.data));
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const postCreateGroup = createAsyncThunk(
  "user/postCreateGroup",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://nana-wanna.herokuapp.com/api/group/add",
        {
          method: "POST",
          body: payload,
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
            token: `${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json());
      if (response) {
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const postupdateInforUser = createAsyncThunk(
  "user/postupdateInforUser",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        "https://nana-wanna.herokuapp.com/api/user/update",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json());
      if (response.message === "SUCCESS") {
        const messSuccess = () => {
          message.success("Update success");
        };
        messSuccess();
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);
export const deleteGroupChat = createAsyncThunk(
  "user/deleteGroupChat",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        `https://nana-wanna.herokuapp.com/api/group/delete?id=${payload}`,
        {
          method: "GET",
          // body:  JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json());
      if (response.message === "SUCCESS") {
        const messSuccess = () => {
          message.success("Delete success");
        };
        messSuccess();
        return response;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getRoomAction = createAsyncThunk(
  "user/getRoom",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        `https://nana-wanna.herokuapp.com/api/group/getAll/?address=${payload}`,
        {
          method: "GET",
          headers: {
            token: `${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json());
      if (response && response.data) {
        // localStorage.setItem('user-infor',  JSON.stringify(response.data ));
        return response.data;
      }
      return thunkAPI.rejectWithValue(response);
    } catch (error) {
      console.log(error, "error");
      return thunkAPI.rejectWithValue();
    }
  }
);
