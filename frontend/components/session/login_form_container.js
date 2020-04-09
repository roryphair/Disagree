import SessionForm from './login_form';
import {connect} from 'react-redux';
import {login, resetErrors} from '../../actions/session_actions';

const msp = (state) =>({
    errors: Object.values(state.errors)
})
const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(msp, mdp)(SessionForm);