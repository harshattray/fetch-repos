/**
 * @Author: harsha
 * @Date:   2019-05-01T00:29:22+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T02:36:30+05:30
 */

import { SET_SORT_VALUE } from "./types";

export const sortBasedOnValue = sortType => async (dispatch, getState) => {
  dispatch({
    type: SET_SORT_VALUE,
    sortValue: sortType
  });
};
