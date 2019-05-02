/**
 * @Author: harsha
 * @Date:   2019-04-29T17:54:40+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T01:51:01+05:30
 */

import {
  GET_SEARCH_RESULTS,
  SET_SORT_VALUE,
  SET_FILTER_LANGUAGE,
  GET_BRANCH_DETAILS,
  FETCHING_DATA,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL,
  PAGE_CHANGE_TRIGGERED
} from "../actions/types";
import {
  sortedRepoBuilder,
  buildLanguageStack,
  filteredLanguageStack,
  setTotalPages
} from "../helpers/Reducerhelpers";

const initial_state = {
  isFetching: true,
  paginationStack: {
    page: 0,
    totalPages: 0,
    limit: 10
  }
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
        isLoading: action.isLoading,
        paginationStack: {
          ...state.paginationStack,
          page: 0,
          totalPages: setTotalPages(
            action.payload.data.length,
            state.paginationStack.limit
          )
        },
        filteredRepoList: null,
        selectedLanguage: null
      };
    case SET_SORT_VALUE:
      return {
        ...state,
        selectedValue: action.sortValue,
        repoList: sortedRepoBuilder(state.repoList, action.sortValue),
        filteredRepoList: state.filteredRepoList
          ? sortedRepoBuilder(state.filteredRepoList, action.sortValue)
          : null
      };
    case SET_FILTER_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.languageFilter,
        filteredRepoList: filteredLanguageStack(
          action.repoStack,
          action.languageFilter
        ),
        paginationStack: {
          ...state.paginationStack,
          page: 0,
          totalPages: setTotalPages(
            filteredLanguageStack(action.repoStack, action.languageFilter)
              .length,
            state.paginationStack.limit
          )
        }
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
        isLoading: action.isLoading,
        repoOrgName: null
      };
    case PAGE_CHANGE_TRIGGERED:
      return {
        ...state,
        isLoading: false,
        paginationStack: {
          ...state.paginationStack,
          page: action.payload
        }
      };
    default:
      return state;
  }
};
