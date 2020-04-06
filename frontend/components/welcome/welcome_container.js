import Welcome from './welcome';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const msp = (state) =>({
    errors: Object.values(state.errors)
})
const mdp = (dispatch) => ({
    login: () => dispatch(login({username: 'demo-williams', password: '123456'}))
})

export default connect(msp, mdp)(Welcome);