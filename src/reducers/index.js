import reduceReducers from "reduce-reducers";
import { appReducer } from "./appreducer";
export const reducer = reduceReducers(appReducer);
