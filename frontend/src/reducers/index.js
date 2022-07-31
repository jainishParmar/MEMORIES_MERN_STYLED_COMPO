import { combineReducers } from "redux";
import posts from "./posts";
import authReducers from "./auth";

export default combineReducers({
  posts,
  authReducers,
});
