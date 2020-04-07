import {connect} from 'react-redux';
import {logout, getUser } from '../../actions/session_actions';
import Home from './home';

const msp = (state) =>({
    user: state.entities.users[state.session.id],
    sessionId: state.session.id
})
const mdp = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
    logout: () => dispatch(logout())
})


export default connect(msp,mdp)(Home);