import MainNavbarComponent from './cmp-main-navbar';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
        user: state.user
    }
}

export default connect(mapStateToProps, { })(MainNavbarComponent);