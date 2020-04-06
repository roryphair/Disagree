import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Home from './home';

const msp = (state) =>({
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
})


export default connect(msp,mdp)(Home);