import {connect} from 'react-redux';
import {logout, getUser } from '../../actions/session_actions';
import {getServers, getServer } from '../../actions/server_actions';
import {getChannelMessages} from '../../actions/messages_actions'
import Home from './home';
import {withRouter} from 'react-router-dom'

const msp = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    sessionId: state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
    messages: state.entities.messages
})
const mdp = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
    logout: () => dispatch(logout()),
    getServers: () => dispatch(getServers()),
    getServer: () => dispatch(getServers(serverId)),
    getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
    
})


export default withRouter(connect(msp,mdp)(Home));