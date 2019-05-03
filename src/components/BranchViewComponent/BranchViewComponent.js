/**
 * @Author: harsha
 * @Date:   2019-05-02T00:04:24+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-03T21:58:16+05:30
 */

import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBranchDetails } from "../../actions/BranchActions";
import BranchViewStyles from "./BranchViewStyles";
import { Link } from "react-router-dom";
import { Container, Card, Icon, Feed } from "semantic-ui-react";

export class BranchViewComponent extends Component {
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
    const replaceUrl = url => {
      url = url.toString();
      return (url = url.replace(
        "https://api.github.com/repos/",
        "https://github.com/"
      ));
    };
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
                    <a href={replaceUrl(repodata.commit.url)} target="_blank">
                      Branch Name: {repodata.name}
                    </a>
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
)(BranchViewComponent);
