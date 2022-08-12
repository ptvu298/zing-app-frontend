import React, { Component } from "react";
import PropTypes from "prop-types";
import SetPasswordFormComponent from './reset-password-form/cnt-reset-password-form'
class ResetPasswordPageComponent extends Component {
  render() {
    return (
      <div>
        <SetPasswordFormComponent></SetPasswordFormComponent>
      </div>
    );
  }
}

ResetPasswordPageComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
 
};

export default ResetPasswordPageComponent;
