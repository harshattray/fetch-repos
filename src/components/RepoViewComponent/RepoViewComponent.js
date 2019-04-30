/**
 * @Author: harsha
 * @Date:   2019-04-30T14:59:04+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T03:06:20+05:30
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepoListStyles from "./RepoListStyles";
import RepoListComponent from "../RepoViewComponent/RepoListComponent";
import { Dropdown } from "semantic-ui-react";
import SortComponent from "../SortComponent/SortComponent";
import { sortOptns } from "./SortConstants";

class RepoViewComponent extends Component {
  repoGrid = list => {
    return list.map(data => {
      return <RepoListComponent key={data.id} gridData={data} />;
    });
  };

  render() {
    const {
      repoListStack,
      dropdowndata,
      handleSubmit,
      invalid,
      submitting,
      selectedOption
    } = this.props;
    return (
      <Fragment>
        <RepoListStyles>
          <div className="repo-sort-filter">
            <SortComponent
              name="Sort"
              placeholder={selectedOption ? selectedOption : "Sort"}
              label="Sort"
              defaultValue={selectedOption ? selectedOption : sortOptns[0]}
              options={sortOptns}
            />
          </div>
          <div className="list-view">{this.repoGrid(repoListStack)}</div>
        </RepoListStyles>
      </Fragment>
    );
  }
}

function mapStateToProps({ repoStack }) {
  return {
    repoListStack: repoStack.repoList,
    selectedOption: repoStack.selectedValue
  };
}

export default connect(mapStateToProps)(RepoViewComponent);
