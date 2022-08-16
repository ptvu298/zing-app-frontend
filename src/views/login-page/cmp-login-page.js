import React, { Component } from "react";
import LoginFormContainer from "../login-page/login-form/cmp-login-form";
import PropTypes from "prop-types";
class LoginPageComponent extends Component {
  render() {
    return (
      <div>
        <LoginFormContainer
          submit={this.props.login}
          getGuppyUserByEmail={this.props.getGuppyUserByEmail}
        />
        {/* <ParticlesBg type="cobweb" bg={true} color={'#4dd0e1'} /> */}
      </div>
    );
  }
}

LoginPageComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default LoginPageComponent;
