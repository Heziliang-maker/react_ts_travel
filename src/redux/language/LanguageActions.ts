export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const ADD_LANGUAGE = "ADD_LANGUAGE";

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en";
}
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: {
    name: string;
    code: string;
  };
}

// 混合类型
export type LanguageActionTypes = AddLanguageAction | ChangeLanguageAction;

export const ChangeLanguageActionCreater = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};
export const AddLanguageActionCreater = (
  name: string,
  code: string
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  };
};
