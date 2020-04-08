import {connect} from 'react-redux';
import {logout, getUser } from '../../actions/session_actions';
import {getServers } from '../../actions/server_actions';
import Home from './home';

const msp = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    sessionId: state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
})
const mdp = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
    logout: () => dispatch(logout()),
    getServers: () => dispatch(getServers())
})


export default connect(msp,mdp)(Home);