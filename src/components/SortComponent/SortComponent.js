/**
 * @Author: harsha
 * @Date:   2019-05-01T00:20:25+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T22:58:05+05:30
 */
/* global  */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Select from "react-select";
import { sortBasedOnValue } from "../../actions/SelectActions";

class SortComponent extends Component {
  handleChange = option => {
    this.props.sortBasedOnValue(option.value);
  };

  render() {
    const { options, placeholder, selectedOption, defaultValue } = this.props;
    return (
      <Select
        defaultValue={defaultValue}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder={placeholder}
      />
    );
  }
}

function mapStateToProps({ repoStack }) {
  return {
    selectedOption: repoStack.selectedValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sortBasedOnValue }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortComponent);
