// import { UserState } from "../types";
interface UserState {
  users: any[];
  token: string | null;
}
import { ADD_USER, UserActions } from "./userActions";

const initialState: UserState = {
  users: [],
  token: null,
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
