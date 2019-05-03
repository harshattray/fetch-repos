/**
 * @Author: harsha
 * @Date:   2019-05-03T20:43:25+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T20:47:57+05:30
 */
/**
 * @Author: harsha
 * @Date:   2019-05-03T19:53:18+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T20:47:57+05:30
 */

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import { RepoListMock } from "../helpers/MockData";

import * as actions from "./SearchActions";
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

  it("should dispatch correct actions when user clicks on Search", () => {
    const store = mockStore({});
    const expectedActions = [
      { type: types.INIT_SEARCH_REQUEST, isLoading: true },
      {
        type: types.GET_SEARCH_RESULTS,
        payload: RepoListMock,
        isFetching: false
      }
    ];

    stubAxios({ status: 200, data: RepoListMock });

    return store
      .dispatch(actions.fetchRepoData("styled-components"))
      .then(() => {
        expect(store.getActions());
      });
  });
});
