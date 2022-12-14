import SignupFormComponent from "./cmp-signup-form";
import { connect } from "react-redux";
import { getGuppyUserByEmail, createCustomerByEmail } from "../../../state/feature/user/user-action";
function mapStateToProps(state) {
  return {
    authConfig: state.authConfig
  };
}
export default connect(mapStateToProps, { getGuppyUserByEmail, createCustomerByEmail })(
  SignupFormComponent
);
