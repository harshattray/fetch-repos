/**
 * @Author: harsha
 * @Date:   2019-04-28T15:49:34+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-30T22:07:30+05:30
 */
import React, { Fragment, Component } from "react";
import {
  Icon,
  Button,
  Divider,
  Input,
  Segment,
  Header,
  Image
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchBarStyles from "./SearchBarStyles";
import InputComponent from "../InputComponent/InputComponent";
import RepoViewComponent from "../RepoViewComponent/RepoViewComponent";
import "react-bootstrap-typeahead/css/Typeahead.css";

class SearchbarComponent extends Component {
  render() {
    const { repoListStack, repoOwnerName, repoOwnerImage } = this.props;
    return (
      <Fragment>
        {repoOwnerName ? (
          <Header as="h2" icon textAlign="center">
            <Image src={repoOwnerImage} size="large" circular />
            <Header.Content>{repoOwnerName}</Header.Content>
          </Header>
        ) : (
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>Github Org Search</Header.Content>
          </Header>
        )}
        <SearchBarStyles>
          <div className="project-container">
            <InputComponent />
          </div>
          {repoListStack ? (
            <RepoViewComponent />
          ) : (
            <p>Repo results will appear here</p>
          )}
        </SearchBarStyles>
      </Fragment>
    );
  }
}

function mapStateToProps({ repoStack }) {
  return {
    repoListStack: repoStack.repoList,
    repoOwnerName: repoStack.repoOrgName,
    repoOwnerImage: repoStack.repoAvatar
  };
}

export default connect(mapStateToProps)(SearchbarComponent);
