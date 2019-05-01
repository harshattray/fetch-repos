/**
 * @Author: harsha
 * @Date:   2019-05-02T00:49:01+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T02:16:56+05:30
 */

import { GET_BRANCH_DETAILS } from "./types";
import qs from "qs";
import axios from "axios";

const config = {
  headers: { "content-type": "application/x-www-form-urlencoded" }
};

export const getBranchDetails = (repoOrgName, repoName) => async (
  dispatch,
  getState
) => {
  dispatch(initialCategoryData());
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

function initialCategoryData() {
  return {
    type: "FETCHING_DATA",
    isFetching: true
  };
}
