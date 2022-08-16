import LoginFormComponent from './cmp-login-form';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        isLogin: !!state.user.token,
        user: state.user,
    }
}

export default connect(mapStateToProps, {
    saveGoogleResponse
})(LoginFormComponent);
