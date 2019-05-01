/**
 * @Author: harsha
 * @Date:   2019-04-28T15:21:31+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T03:22:15+05:30
 */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import RepoData from "./RepoReducers";

export default combineReducers({
  form: formReducer,
  repoStack: RepoData
});
