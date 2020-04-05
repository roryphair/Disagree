import SessionForm from './login_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const msp = (state) =>({
    errors: Object.values(state.errors)
})
const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm);