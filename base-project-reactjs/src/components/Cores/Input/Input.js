import React, { Component } from "react";
import { combineValidations } from "./validate";

export default class Input extends Component {
  state = {
    value: this.props.value,
    error: false
  };
  componentWillReceiveProps(newProps) {
    if (newProps.apiError) {
      this.setState({ value: newProps.value, error: newProps.apiError });
    } else if (newProps.errorEmail) {
      this.setState({ value: newProps.value, error: newProps.errorEmail });
    } else if (newProps.errorCode) {
      this.setState({ value: newProps.value, error: newProps.errorCode });
    } else {
      this.setState({ value: newProps.value });
    }
  }
  onChange = e => {
    const { handleChange, validate, name } = this.props,
      value = e.target.value,
      error = validate ? combineValidations(validate)(value) : false;
    this.setState({ value, error });
    handleChange({ name, value, error });
  };
  render() {
    const { type, name, value, placeholder, label } = this.props;
    return (
      <div className="w-100">
        <label className="text-center">{label}</label>
        <input
          className="form-control w-100"
          type={type}
          name={name}
          value={value}
          onChange={this.onChange}
          placeholder={placeholder}
        />
        <span style={{ color: "red" }}>{this.state.error}</span>
      </div>
    );
  }
}
