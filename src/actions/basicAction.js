import * as types from "../constants/ActionTypes";
import axios from "axios";
export function setData(user) {
  return {
    type: types.DEMO,
    value: user
  };
}

export function loadData(url, config) {
  return dispatch => {
    return axios.get(url, config).then(res => {
      const data = res.data;
      dispatch({
        type: types.DATA,
        payload: res.data
      });
    });
  };
}
