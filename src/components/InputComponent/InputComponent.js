/**
 * @Author: harsha
 * @Date:   2019-04-17T23:57:06+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T23:40:25+05:30
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { reduxForm, Field, reset } from "redux-form";
import { renderInputFields } from "../renderInputFieldComponent/renderInputFieldComponent";
import { fetchRepoData } from "../../actions/SearchActions";
import { validate } from "../../helpers/validate";

/**
 * [InputComponent]
 * @extends Component
 */

class InputComponent extends Component {
  dispatchRepoRequest = data => {
    this.props.fetchRepoData(data);
  };

  render() {
    const { handleSubmit, invalid, submitting } = this.props;
    return (
      <form
        name="repoSearchForm"
        onSubmit={handleSubmit(this.dispatchRepoRequest)}
        noValidate
        className="form-section"
      >
        <Field
          name="orgname"
          component={renderInputFields}
          placeholder="Enter Organization name here "
          type="text"
          required
          label="Enter Org Name"
          className="column"
        />
        <Button
          className="search-button"
          disabled={invalid}
          loading={submitting}
        >
          Search
        </Button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepoData }, dispatch);
}

const afterSubmitdata = (result, dispatch) => dispatch(reset("repoSearchForm"));

InputComponent = reduxForm({
  validate,
  form: "repoSearchForm",
  destroyOnUnmount: false,
  onSubmitSuccess: afterSubmitdata
})(InputComponent);

export default connect(
  null,
  mapDispatchToProps
)(InputComponent);
