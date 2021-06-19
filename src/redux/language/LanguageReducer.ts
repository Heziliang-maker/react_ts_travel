interface LanguageState {
  language: string;
  languageList: { name: string; code: string }[];
}

import {
  ADD_LANGUAGE,
  CHANGE_LANGUAGE,
  LanguageActionTypes,
} from "./LanguageActions";

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: "zh",
    },
    {
      name: "English",
      code: "en",
    },
  ],
};
// reducer 就是一个函数  通过对传入的action的数据进行判断 而后进行相应的数据处理
export default (preState = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case ADD_LANGUAGE:
      return Object.assign({}, preState, {
        languageList: [...preState.languageList, { ...action.payload }],
      });
    case CHANGE_LANGUAGE:
      return Object.assign({}, preState, {
        language: action.payload,
      });
    default:
      return preState;
  }
};
