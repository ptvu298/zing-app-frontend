import AppBarComponent from "./cmp-app-bar";
import { connect } from "react-redux";
import { logout } from "../../../../state/feature/login/auth-action"
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {logout})(AppBarComponent);
