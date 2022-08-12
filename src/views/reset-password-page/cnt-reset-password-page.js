import ResetPasswordPageComponent from "./cmp-reset-password-page";
import { connect } from "react-redux";
import { login } from "../../state/feature/login/auth-action";
import { getGuppyUserByEmail } from "../../state/feature/user/user-action";
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { login, getGuppyUserByEmail })(
  ResetPasswordPageComponent
);
