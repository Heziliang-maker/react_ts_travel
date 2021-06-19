import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const ADD_LANGUAGE = "ADD_LANGUAGE";

interface languageState {
  language: "zh" | "en";
  languageList: { name: string; code: string }[];
}

const initialState: languageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "英文", code: "en" },
  ],
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<"zh" | "en">) {
      state.language = action.payload;
    },
    // 在rtk中 针对action的泛型 把payload的类型接口传入PayloadAction的泛型就行了 type默认string约束
    addLanguage(state, action: PayloadAction<{ name: string; code: string }>) {
      state.languageList.push(action.payload);
    },
  },
});
