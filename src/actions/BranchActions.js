/**
 * @Author: harsha
 * @Date:   2019-05-02T00:49:01+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T20:18:31+05:30
 */

import { GET_BRANCH_DETAILS, FETCHING_DATA } from "./types";
import axios from "axios";

export const getBranchDetails = (repoOrgName, repoName) => async (
  dispatch,
  getState
) => {
  dispatch(initialBranchData());
  try {
    const res = await axios.get(
      `https://api.github.com/repos/${repoOrgName}/${repoName}/branches?per_page=1000`
    );
    dispatch({
      type: GET_BRANCH_DETAILS,
      payload: res,
      repoName: repoName,
      isFetching: false
    });
  } catch (e) {
    console.log(e);
  }
};

export const initialBranchData = () => {
  return {
    type: FETCHING_DATA,
    isFetching: true
  };
};
