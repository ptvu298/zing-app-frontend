import ResetPasswordFormComponent from "./cmp-reset-password-form";
import { connect } from "react-redux";
import {
  changePassword,
  getGuppyUserByEmail,
} from "../../../state/feature/user/user-action";
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { getGuppyUserByEmail,changePassword })(
  ResetPasswordFormComponent
);
