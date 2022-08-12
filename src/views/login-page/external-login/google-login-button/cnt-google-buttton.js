import { connect } from "react-redux";
import GoogleButton from "./cmp-google-button";
// import { loginWithGoogle } from "../../../../state/feature/external-login/response-action";

function mapStateToProps(state) {
    return {
        externalLoginReponse: state.response
    };
}

export default connect(mapStateToProps, {
    // loginWithGoogle
})(GoogleButton);