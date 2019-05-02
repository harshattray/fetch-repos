/**
 * @Author: harsha
 * @Date:   2019-04-30T16:40:21+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-02T23:58:12+05:30
 */

import React, { Fragment, Component } from "react";
import { Card, Feed, Icon, Button, Label } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import moment from "moment";

class RepoListComponent extends Component {
  cickToViewBranches = (history, orgName, repoName) => () => {
    history.push(`/repos/${orgName}/${repoName}/branches`);
  };
  render() {
    const { gridData, history, repoOwnerName } = this.props;
    return (
      <Fragment>
        <div className="repo-card-section">
          <Card>
            <Card.Content>
              <Card.Header>{gridData.name}</Card.Header>
              <Card.Meta>
                Created at: {moment(gridData.created_at).format("MM/DD/YYYY")}
              </Card.Meta>
              <Card.Meta>
                Last Updated: {moment(gridData.updated_at).format("MM/DD/YYYY")}
              </Card.Meta>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Label />
                  <Feed.Content>
                    <Feed.Summary>
                      <Icon name="star" color="yellow" />
                      {gridData.stargazers_count} stars
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label />
                  <Feed.Content>
                    <Feed.Summary>
                      <Icon name="eye" color="red" />
                      {gridData.watchers_count} watchers
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label />
                  <Feed.Content>
                    <Feed.Summary>
                      <Icon name="fork" color="blue" />
                      {gridData.forks_count} fork
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label />
                  <Feed.Content>
                    <Feed.Summary>
                      <Icon name="warning circle" />
                      {gridData.open_issues_count} open issues
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              <Card.Content extra>
                <Button
                  as="div"
                  labelPosition="right"
                  onClick={this.cickToViewBranches(
                    history,
                    repoOwnerName,
                    gridData.name
                  )}
                >
                  <Button basic color="blue">
                    <Icon name="fork" />
                    View
                  </Button>
                  <Label as="a" basic color="blue" pointing="left">
                    Branches
                  </Label>
                </Button>
              </Card.Content>
            </Card.Content>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(RepoListComponent);
