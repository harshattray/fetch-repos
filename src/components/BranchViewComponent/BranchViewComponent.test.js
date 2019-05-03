/**
 * @Author: harsha
 * @Date:   2019-05-03T15:26:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T21:21:46+05:30
 */
import React from "react";
import { shallow } from "enzyme";

import { BranchViewComponent } from "../BranchViewComponent/BranchViewComponent";
import { getBranchDetails } from "../../actions/BranchActions";
import { branchDetails } from "../../actions/mockApiResp";

describe("BranchView", () => {
  let wrapper;

  const propsStack = {
    repoBranchDetails: branchDetails,
    repoOrgName: "styled-components",
    getBranchDetails: jest.fn(),
    repoName: "comparison",
    isFetching: false,
    match: {
      params: {}
    }
  };

  beforeEach(() => {
    wrapper = shallow(<BranchViewComponent {...propsStack} />);
  });

  test("Has a div container", () => {
    expect(wrapper.find(".project-container").length).toBe(1);
  });
});
