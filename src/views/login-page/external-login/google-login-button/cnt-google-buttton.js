import { connect } from "react-redux";
import GoogleButton from "./cmp-google-button";
import { saveGoogleResponse } from "../../../../state/feature/external-login/response-action";

function mapStateToProps(state) {
    return {
        externalLoginReponse: state.externalLoginReponse,
        // hasToken: !!state.
    };
}

export default connect(mapStateToProps, {
    saveGoogleResponse,
    // getGuppyUserByEmail,
    // getGuppyAccountIntegrationSetting
})(GoogleButton);