/**
 * @Author: harsha
 * @Date:   2019-05-01T00:20:25+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T22:58:25+05:30
 */
/* global  */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Select from "react-select";
import { filterLanguageTrigger } from "../../actions/SelectActions";

class FilterComponent extends Component {
  handleChange = option => {
    this.props.filterLanguageTrigger(option.value);
  };

  render() {
    const {
      options,
      placeholder,
      selectedFilterLanguage,
      defaultValue
    } = this.props;
    return (
      <Select
        defaultValue={defaultValue}
        value={selectedFilterLanguage}
        onChange={this.handleChange}
        options={options}
        placeholder={placeholder}
      />
    );
  }
}

function mapStateToProps({ repoStack }) {
  return {
    selectedFilterLanguage: repoStack.selectedLanguage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterLanguageTrigger }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterComponent);
