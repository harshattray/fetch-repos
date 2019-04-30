/**
 * @Author: harsha
 * @Date:   2019-04-29T17:55:04+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-30T14:44:13+05:30
 */

import { GET_SEARCH_RESULTS } from "./types";
import qs from "qs";
import axios from "axios";

const config = {
  headers: { "content-type": "application/x-www-form-urlencoded" }
};

export const fetchDropdownValues = formData => async (dispatch, getState) => {
  const { orgname } = formData;
  try {
    const res = await axios.get(
      `https://api.github.com/orgs/${orgname}/repos?per_page=100`
    );
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res
    });
  } catch (e) {
    console.log(e);
  }
};
