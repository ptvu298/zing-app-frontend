import ForgotPasswordFormComponent from "./cmp-forgot-password-form";
import { connect } from "react-redux";
import {
  receiveVerifyCode,
  getGuppyUserByEmail,
} from "../../../state/feature/user/user-action";
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  receiveVerifyCode,
  getGuppyUserByEmail,
})(ForgotPasswordFormComponent);
