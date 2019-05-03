/**
 * @Author: harsha
 * @Date:   2019-05-03T19:53:18+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T20:53:11+05:30
 */

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import { branchDetails } from "./mockApiResp";

import * as actions from "./BranchActions";
import * as types from "./types";

const stubAxios = response => {
  axios.get = jest
    .fn()
    .mockImplementation(
      () =>
        new Promise((resolve, reject) =>
          response.status !== 200 ? reject(response) : resolve(response)
        )
    );
};

describe("dispatch Search actions", () => {
  let mockStore;

  beforeEach(() => {
    const middlewares = [thunk];
    mockStore = configureMockStore(middlewares);
  });

  afterEach(() => {
    axios.get.mockReset();
  });

  afterAll(() => {
    axios.get.mockRestore();
  });

  it("should dispatch correct actions when user clicks on View Branch", () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.FETCHING_DATA, isLoading: true },
      {
        type: types.GET_BRANCH_DETAILS,
        payload: branchDetails,
        isFetching: false
      }
    ];

    stubAxios({ status: 200, data: branchDetails });

    return store
      .dispatch(
        actions.getBranchDetails("Chumbak", "Retailstore-Attendance-Monitor")
      )
      .then(() => {
        expect(store.getActions());
      });
  });
});
