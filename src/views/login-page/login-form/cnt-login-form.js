import LoginFormComponent from './cmp-login-form';
import { connect } from 'react-redux';
import { loginWithGoogle } from '../../../state/feature/external-login/response-action'

function mapStateToProps(state) {
    return {
        isLogin: !!state.user.token,
        user: state.user
    }
}

export default connect(mapStateToProps, {
    loginWithGoogle
})(LoginFormComponent);
