import Welcome from './welcome';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const msp = (state) =>({
    errors: Object.values(state.errors)
})
const mdp = (dispatch, ownProps) => ({
    login: () => dispatch(login({email: 'demo@demo.com', password: '123456'})).then(ownProps.history.push('/signup'))
    
})

export default connect(msp, mdp)(Welcome);