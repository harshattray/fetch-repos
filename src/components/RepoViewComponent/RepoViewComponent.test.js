/**
 * @Author: harsha
 * @Date:   2019-05-03T15:26:50+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T16:26:09+05:30
 */
import React from "react";
import { shallow } from "enzyme";
import ReactPaginate from "react-paginate";

import { RepoViewComponent } from "../RepoViewComponent/RepoViewComponent";
import SortComponent from "../SortComponent/SortComponent";
import FilterComponent from "../FilterComponent/FilterComponent";
import RepoListComponent from "../RepoViewComponent/RepoListComponent";
import { RepoListMock } from "../../helpers/MockData";

describe("RepoView", () => {
  let wrapper;
  let paginator;
  const propsStack = {
    key: "styled-components",
    paginationStack: {
      page: 0,
      totalPages: 0,
      limit: 10
    },
    languagesOptions: ["JavaScript", "Python"],
    filteredRepos: RepoListMock,
    repoListStack: RepoListMock,
    repoOwnerName: "styled-components",
    pageChangeTrigger: jest.fn(),
    isLoading: false
  };

  const paginationProps = {
    ...propsStack,
    paginationStack: {
      page: 0,
      totalPages: 2,
      limit: 1
    }
  };

  beforeEach(() => {
    wrapper = shallow(<RepoViewComponent {...propsStack} />);
    paginator = shallow(<RepoViewComponent {...paginationProps} />);
  });

  test("Has a div container", () => {
    expect(wrapper.find(".repo-grid").length).toBe(1);
  });

  test("Should have 2 RepoItems", () => {
    expect(wrapper.find(RepoListComponent).length).toBe(2);
  });

  test("Should have 1 RepoItems due to pagination", () => {
    expect(paginator.find(RepoListComponent).length).toBe(1);
  });

  test("Should not have paginator", () => {
    expect(wrapper.find(ReactPaginate).length).toBe(0);
  });

  test("Should have paginator", () => {
    expect(paginator.find(ReactPaginate).length).toBe(1);
  });
  test("Has  1 FilterComponent", () => {
    expect(wrapper.find(FilterComponent).length).toBe(1);
  });

  test("Has 1 SortComponent", () => {
    expect(wrapper.find(SortComponent).length).toBe(1);
  });
});
