/**
 * @Author: harsha
 * @Date:   2019-04-30T14:59:04+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-30T17:13:09+05:30
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepoListStyles from "./RepoListStyles";
import RepoListComponent from "../RepoViewComponent/RepoListComponent";

class RepoViewComponent extends Component {
  repoGrid = list => {
    return list.map(data => {
      return <RepoListComponent key={data.id} gridData={data} />;
    });
  };

  render() {
    const { repoListStack } = this.props;
    return (
      <Fragment>
        <RepoListStyles>
          <div className="list-view">{this.repoGrid(repoListStack)}</div>
        </RepoListStyles>
      </Fragment>
    );
  }
}

function mapStateToProps({ repoStack }) {
  return {
    repoListStack: repoStack.repoList
  };
}

export default connect(mapStateToProps)(RepoViewComponent);
