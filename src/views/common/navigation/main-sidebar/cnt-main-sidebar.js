import MainSidebarComponent from "./cmp-main-sidebar";
import { connect } from "react-redux";
import { logout } from "../../../../state/feature/login/auth-action";
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { logout })(MainSidebarComponent);
