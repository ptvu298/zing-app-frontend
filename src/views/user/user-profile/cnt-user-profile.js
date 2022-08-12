import UserProfileComponent from "./cmp-user-profile";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps, {})(UserProfileComponent);