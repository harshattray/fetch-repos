/**
 * @Author: harsha
 * @Date:   2019-05-01T00:29:22+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T01:07:17+05:30
 */

import {
  SET_SORT_VALUE,
  SET_FILTER_LANGUAGE,
  PAGE_CHANGE_TRIGGERED
} from "./types";

export const sortBasedOnValue = sortType => async (dispatch, getState) => {
  dispatch({
    type: SET_SORT_VALUE,
    sortValue: sortType
  });
};

export const filterLanguageTrigger = language => async (dispatch, getState) => {
  dispatch({
    type: SET_FILTER_LANGUAGE,
    languageFilter: language,
    repoStack: getState().repoStack.repoList
  });
};

export const pageChangeTrigger = pageData => async dispatch => {
  dispatch({
    type: PAGE_CHANGE_TRIGGERED,
    payload: pageData
  });
};
