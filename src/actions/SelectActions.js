/**
 * @Author: harsha
 * @Date:   2019-05-01T00:29:22+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T22:41:52+05:30
 */

import { SET_SORT_VALUE, SET_FILTER_LANGUAGE } from "./types";

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
