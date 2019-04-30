/**
 * @Author: harsha
 * @Date:   2019-04-29T17:54:40+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-30T22:03:07+05:30
 */

import { GET_SEARCH_RESULTS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        repoList: action.payload.data,
        repoOrgName: action.payload.data[0].owner.login,
        repoAvatar: action.payload.data[0].owner.avatar_url
      };
    default:
      return state;
  }
};
