/**
 * @Author: harsha
 * @Date:   2019-04-30T16:40:21+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T22:58:31+05:30
 */

import React, { Fragment, Component } from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import moment from "moment";

export default class RepoListComponent extends Component {
  render() {
    const { gridData } = this.props;
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
            </Card.Content>
          </Card>
        </div>
      </Fragment>
    );
  }
}
