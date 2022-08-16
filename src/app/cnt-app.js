import AppComponent from "./cmp-app";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    authConfig: state.authConfig,
    externalLoginReponse: state.externalLoginReponse,
  };
}

export default connect(mapStateToProps, {})(AppComponent);
