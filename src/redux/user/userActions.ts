import { ThunkAction } from "redux-thunk";
import { RouteState } from "../store";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ADD_USER = "ADD_USER";

interface AddUserActions {
  type: typeof ADD_USER;
  payload: any[];
}

export type UserActions = AddUserActions;

// export const addUserActionsCreater = (list): AddUserActions => {
//   return {
//     type: ADD_USER,
//     payload: list,
//   };
// };

// export const giveMyDataActionCreater =
//   (): ThunkAction<void, RouteState, unknown, UserActions> =>
//   async (dispatch, getState) => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     dispatch(addUserActionsCreater(data));
//   };

export const getUserThunk = createAsyncThunk(
  "user/getUser",
  async (id: number, thunkApi) => {
    console.log("=>", id, "id");
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    // 方式1 thunkApi.dispatch( getUser(data));
    return data; //返回promise  //方式2 返回promise 在etraReducers中处理
  }
);
// 登录
export const logInThunk = createAsyncThunk("user/logIn", async () => {
  // fake
  const api = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("barer ey0ceyyu");
      }, 1400);
    });
  };

  return await api();
});
// 登出
export const logOutThunk = createAsyncThunk("user/logOut", () => {
  return "";
});

interface UserState {
  users: any[];
  token: string | null;
  loading: boolean;
}

const initialState = {
  users: [],
  token: null,
  loading: false,
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // getUser(state, action) {
    //   console.log("=>action", action);
    //   state.users = action.payload;
    // },
  },
  // 异步控制
  extraReducers: {
    [getUserThunk.pending.type]: (state) => {
      console.log("=>", "pending");
    },
    [getUserThunk.fulfilled.type]: (state, action) => {
      console.log("=>", "fulfilled");
      state.users = action.payload;
    },
    [getUserThunk.rejected.type]: (state) => {
      console.log("=>", "rejected");
    },
    // 登录
    [logInThunk.fulfilled.type]: (state, action) => {
      console.log("=>", action, "fulfilled action");
      state.loading = false;
      state.token = action.payload;
    },

    // 登出
    [logOutThunk.fulfilled.type]: (state) => {
      state.token = null;
    },

    [logInThunk.pending.type]: (state) => {
      state.loading = true;
    },
  },
});
