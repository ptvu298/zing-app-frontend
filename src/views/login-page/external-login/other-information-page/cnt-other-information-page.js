import { connect } from "react-redux";
import { connect } from "react-redux";
import {
  signupGuppyAccount,
  createCustomerByEmail,
  addNewUserProfile,
} from "../../state/feature/user/user-action";

import { login } from "../../state/feature/login/auth-action";
import { getGuppyAccountIntegrationSetting } from "../../state/feature/authConfig/authConfig-action";
import { getGuppyUserByEmail } from "../../state/feature/user/user-action";

function mapStateToProps(state) {
  return {
    authConfig: state.authConfig,
  };
}

export default connect(mapStateToProps, {
  login,
  addNewUserProfile,
  signupGuppyAccount,
  getGuppyUserByEmail,
  createCustomerByEmail,
  getGuppyAccountIntegrationSetting,
})(OtherPageComponent);
