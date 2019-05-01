/**
 * @Author: harsha
 * @Date:   2019-04-29T17:54:40+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T03:39:12+05:30
 */

import {
  GET_SEARCH_RESULTS,
  SET_SORT_VALUE,
  SET_FILTER_LANGUAGE,
  GET_BRANCH_DETAILS,
  FETCHING_DATA,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL
} from "../actions/types";
import {
  sortedRepoBuilder,
  buildLanguageStack,
  filteredLanguageStack
} from "../helpers/Reducerhelpers";

const initial_state = {
  isFetching: true
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        repoList: action.payload.data,
        repoOrgName: action.payload.data[0].owner.login,
        repoAvatar: action.payload.data[0].owner.avatar_url,
        languagesStack: buildLanguageStack(action.payload.data),
        fetchFail: null,
        isLoading: action.isLoading
      };
    case SET_SORT_VALUE:
      return {
        ...state,
        selectedValue: action.sortValue,
        repoList: sortedRepoBuilder(state.repoList, action.sortValue)
      };
    case SET_FILTER_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.languageFilter,
        filteredRepoList: filteredLanguageStack(
          action.repoStack,
          action.languageFilter
        )
      };
    case GET_BRANCH_DETAILS:
      return {
        ...state,
        branchData: action.payload.data,
        isFetching: action.isFetching,
        repoName: action.repoName
      };
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case INIT_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SEARCH_RESULTS_FAIL:
      return {
        ...state,
        fetchFail: action.payload.response.data.message,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
