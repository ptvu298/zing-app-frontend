import LoginPageComponent from "./cmp-login-page";
import { connect } from "react-redux";
import { login } from "../../state/feature/login/auth-action";
import { getGuppyUserByEmail } from "../../state/feature/user/user-action";
// import { saveGoogleResponse } from "../../state/feature/external-login/response-action";
function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {
  login,
  getGuppyUserByEmail,
  // saveGoogleResponse
})(LoginPageComponent);
