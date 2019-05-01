/**
 * @Author: harsha
 * @Date:   2019-04-30T14:59:04+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T00:43:19+05:30
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepoListStyles from "./RepoListStyles";
import RepoListComponent from "../RepoViewComponent/RepoListComponent";
import { Dropdown } from "semantic-ui-react";
import SortComponent from "../SortComponent/SortComponent";
import FilterComponent from "../FilterComponent/FilterComponent";
import { sortOptns } from "./SortConstants";

class RepoViewComponent extends Component {
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
      repoOwnerName
    } = this.props;
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
            <div className="list-view">{this.repoGrid(filteredRepos)}</div>
          ) : (
            <div className="list-view">{this.repoGrid(repoListStack)}</div>
          )}
        </RepoListStyles>
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
    repoOwnerName: repoStack.repoOrgName
  };
}

export default connect(mapStateToProps)(RepoViewComponent);
