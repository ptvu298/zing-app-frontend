import React, { Component } from "react";
import PropTypes from "prop-types";
import ForgotPasswordFormContainer from './forgot-password-form/cnt-forgot-password-form'
class ForgotPasswordPageComponent extends Component {
  render() {
    return (
      <div>
        <ForgotPasswordFormContainer></ForgotPasswordFormContainer>
      </div>
    );
  }
}

ForgotPasswordPageComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
 
};

export default ForgotPasswordPageComponent;
