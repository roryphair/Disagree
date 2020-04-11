import {connect} from 'react-redux';
import {logout, getUser } from '../../actions/session_actions';
import {getServer } from '../../actions/server_actions';
import {getChannelMessages} from '../../actions/messages_actions'
import Home from './home';
import {withRouter} from 'react-router-dom'

const msp = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    users: state.entities.users,
    sessionId: state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
    servers: state.entities.servers,
    messages: state.entities.messages,
    channels: state.entities.channels
})
const mdp = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
    logout: () => dispatch(logout()),
    getServer: (serverId) => dispatch(getServer(serverId)),
    getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
})


export default withRouter(connect(msp,mdp)(Home));