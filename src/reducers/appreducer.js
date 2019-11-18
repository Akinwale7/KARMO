import { INITIAL_STATE } from "../constants/AppConstants";
import * as types from "../constants/ActionTypes";

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.DEMO:
      return { ...state, app: action.value };
    case types.DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
