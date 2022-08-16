import { connect } from "react-redux";
import GoogleButton from "./cmp-google-button";
import { saveGoogleResponse } from "../../../../state/feature/external-login/response-action";
// import { getGuppyAccountIntegrationSetting } from "../../../../state/feature/authConfig/authConfig-action"

function mapStateToProps(state) {
    return {
        externalLoginReponse: state.response
    };
}

export default connect(mapStateToProps, {
    saveGoogleResponse,
    // getGuppyAccountIntegrationSetting
})(GoogleButton);