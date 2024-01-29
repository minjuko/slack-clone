import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReucer = combineReducers({
  user: userReducer,
});

export default rootReucer;
