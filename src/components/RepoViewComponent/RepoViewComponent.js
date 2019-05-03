/**
 * @Author: harsha
 * @Date:   2019-04-30T14:59:04+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T16:15:34+05:30
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepoListStyles from "./RepoListStyles";
import RepoListComponent from "../RepoViewComponent/RepoListComponent";
import { Dropdown } from "semantic-ui-react";
import SortComponent from "../SortComponent/SortComponent";
import FilterComponent from "../FilterComponent/FilterComponent";
import { pageChangeTrigger } from "../../actions/SelectActions";
import { sortOptns } from "./SortConstants";
import ReactPaginate from "react-paginate";

export class RepoViewComponent extends Component {
  repoGrid = list => {
    return list.map(data => {
      return (
        <RepoListComponent
          key={data.id}
          gridData={data}
          repoOwnerName={this.props.repoOwnerName}
        />
      );
    });
  };

  pageChange = data => {
    this.props.pageChangeTrigger(data.selected);
  };

  render() {
    const {
      repoListStack,
      dropdowndata,
      handleSubmit,
      invalid,
      submitting,
      selectedOption,
      selectedFilterLanguage,
      languagesOptions,
      filteredRepos,
      repoOwnerName,
      paginationStack,
      pageChangeTrigger
    } = this.props;

    const actualIndex = paginationStack.limit * paginationStack.page;
    const repoListPagination = repoListStack.slice(
      actualIndex,
      actualIndex + paginationStack.limit
    );
    const filteredrepoListPagination = filteredRepos
      ? filteredRepos.slice(actualIndex, actualIndex + paginationStack.limit)
      : null;
    const totalPages = filteredRepos
      ? filteredRepos.length / paginationStack.limit
      : repoListStack.length / paginationStack.limit;
    return (
      <Fragment>
        <RepoListStyles>
          <div className="repo-grid">
            <div className="repo-sort-filter">
              <SortComponent
                name="Sort"
                placeholder={selectedOption ? selectedOption : "Sort"}
                label="Sort"
                defaultValue={selectedOption ? selectedOption : sortOptns[0]}
                options={sortOptns}
              />
            </div>
            <div className="repo-sort-filter">
              <FilterComponent
                name="Filter"
                placeholder={
                  selectedFilterLanguage
                    ? selectedFilterLanguage
                    : "Filter based on  language"
                }
                label="Filter based on language"
                defaultValue={
                  selectedFilterLanguage
                    ? selectedFilterLanguage
                    : languagesOptions[0]
                }
                options={languagesOptions}
              />
            </div>
          </div>
          {filteredRepos ? (
            <div className="list-view">
              {this.repoGrid(filteredrepoListPagination)}
            </div>
          ) : (
            <div className="list-view">{this.repoGrid(repoListPagination)}</div>
          )}
        </RepoListStyles>
        {totalPages > 1 ? (
          <ReactPaginate
            previousLabel="previous"
            nextLabel="Next"
            breakClassName="break-me"
            pageCount={paginationStack.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={paginationStack.limit}
            onPageChange={this.pageChange}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps({ repoStack }) {
  return {
    repoListStack: repoStack.repoList,
    filteredRepos: repoStack.filteredRepoList,
    selectedOption: repoStack.selectedValue,
    selectedFilterLanguage: repoStack.selectedLanguage,
    languagesOptions: repoStack.languagesStack,
    repoOwnerName: repoStack.repoOrgName,
    paginationStack: repoStack.paginationStack
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ pageChangeTrigger }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoViewComponent);
