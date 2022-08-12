import NavigationComponent from './cmp-navigation';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
        user: state.user
    }
}

export default connect(mapStateToProps, { })(NavigationComponent);