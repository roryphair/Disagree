import SignupForm from './signup_form';
import {connect} from 'react-redux';
import {signup, resetErrors, login} from '../../actions/session_actions';

const msp = (state) =>({
    errors: Object.values(state.errors)
})
const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),   
    resetErrors: () => dispatch(resetErrors()),
    demoLogin: () => dispatch(login({email: 'demo@demo.com', password: '123456'}))
})

export default connect(msp, mdp)(SignupForm);