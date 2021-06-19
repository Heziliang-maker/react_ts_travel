// import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import languageReducer from "./language/LanguageReducer";
// import userReducer from "./user/userReducer";
import { userSlice } from "./user/userActions";
import { languageSlice } from "./language/slice";
import { shoppingCartSlice } from "./shopppingcart/slice";
console.log("userSlice=>", userSlice);

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// 引入自定义中间件
import { actionLog } from "./middlewares";
//
// const { reducer } = userSlice;

const reducer = combineReducers({
  language: languageSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
});

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(thunk, actionLog)
//     // other store enhancers if any
//   )
// );

// 初始化store
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

// 一般来说 store的类型称为RouteState
export type RouteState = ReturnType<typeof store.getState>;

export default store;
