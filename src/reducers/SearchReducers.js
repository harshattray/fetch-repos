/**
 * @Author: harsha
 * @Date:   2019-04-29T17:54:40+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T03:16:19+05:30
 */

import { GET_SEARCH_RESULTS, SET_SORT_VALUE } from "../actions/types";
import { sortedRepoBuilder } from "../helpers/Reducerhelpers";

export default (state = [], action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        repoList: action.payload.data,
        repoOrgName: action.payload.data[0].owner.login,
        repoAvatar: action.payload.data[0].owner.avatar_url
      };
    case SET_SORT_VALUE:
      return {
        ...state,
        selectedValue: action.sortValue,
        repoList: sortedRepoBuilder(state.repoList, action.sortValue)
      };
    default:
      return state;
  }
};