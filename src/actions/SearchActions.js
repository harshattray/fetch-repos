/**
 * @Author: harsha
 * @Date:   2019-04-29T17:55:04+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T03:29:41+05:30
 */

import {
  GET_SEARCH_RESULTS,
  INIT_SEARCH_REQUEST,
  SEARCH_RESULTS_FAIL
} from "./types";
import qs from "qs";
import axios from "axios";

export const fetchRepoData = formData => async (dispatch, getState) => {
  const { orgname } = formData;
  dispatch(initfetchRepoData());
  try {
    const res = await axios.get(
      `https://api.github.com/orgs/${orgname}/repos?per_page=100`
    );
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res,
      isLoading: false
    });
  } catch (e) {
    dispatch({
      type: SEARCH_RESULTS_FAIL,
      payload: e,
      isLoading: false
    });
  }
};

function initfetchRepoData() {
  return {
    type: INIT_SEARCH_REQUEST,
    isLoading: true
  };
}
