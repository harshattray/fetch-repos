/**
 * @Author: harsha
 * @Date:   2019-05-02T00:04:24+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T03:02:13+05:30
 */

import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBranchDetails } from "../../actions/BranchActions";
import BranchViewStyles from "./BranchViewStyles";
import { Link } from "react-router-dom";
import { Container, Card, Icon, Feed } from "semantic-ui-react";

class BranchViewContainer extends Component {
  componentDidMount() {
    const { match, getBranchDetails } = this.props;
    getBranchDetails(match.params.repoOwnerName, match.params.repositoryName);
  }
  render() {
    const {
      repoBranchDetails,
      isFetching,
      repoName,
      repoOrgName,
      match
    } = this.props;
    return (
      <Fragment>
        <BranchViewStyles>
          <div className="project-container">
            <header className="Branch-header">
              <Container>
                <h1 className="Branch-title">Branch Details</h1>
              </Container>
              <Link to="/">
                <span className="Branch-title">Go back</span>
              </Link>
            </header>
            {isFetching ? (
              <h3>Loading...</h3>
            ) : (
              <div className="list-view">
                <RenderBranchList
                  repos={repoBranchDetails}
                  repoName={repoName}
                  repoOrgName={match.params.repoOwnerName}
                />
              </div>
            )}
          </div>
        </BranchViewStyles>
      </Fragment>
    );
  }
}

const RenderBranchList = ({ repos, repoName, repoOrgName }) => {
  const renderList = repos.map(repodata => {
    return (
      <div className="repo-card-section" key={repodata.commit.sha}>
        <Card>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label />
                <Feed.Content>
                  <Feed.Summary>
                    <Icon name="code" color="blue" />
                    Repo Name: {repoName}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
            <Feed>
              <Feed.Event>
                <Feed.Label />
                <Feed.Content>
                  <Feed.Summary>
                    <Icon name="fork" color="yellow" />
                    Branch Name: {repodata.name}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Organization name : {repoOrgName}
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  });
  return <Fragment>{renderList}</Fragment>;
};

function mapStateToProps({ repoStack }) {
  return {
    repoOwnerName: repoStack.repoOrgName,
    repoBranchDetails: repoStack.branchData,
    isFetching: repoStack.isFetching,
    repoName: repoStack.repoName,
    repoOrgName: repoStack.repoOrgName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBranchDetails }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BranchViewContainer);
