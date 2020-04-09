import SignupForm from './signup_form';
import {connect} from 'react-redux';
import {signup, resetErrors} from '../../actions/session_actions';

const msp = (state) =>({
    errors: Object.values(state.errors)
})
const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),   
    resetErrors: () => dispatch(resetErrors())
})

export default connect(msp, mdp)(SignupForm);