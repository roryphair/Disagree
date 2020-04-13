import {connect} from 'react-redux';
import {logout, getUser } from '../../actions/session_actions';
import {getServer } from '../../actions/server_actions';
import {getChannelMessages, receiveMessage} from '../../actions/messages_actions'
import Home from './home';
import {withRouter} from 'react-router-dom'

let sub;

function subscribeToChannelMessages (channelId, dispatch){
    if(sub) sub = sub.unsubscribe();
    sub = App.cable.subscriptions.create(
        {channel: 'ChannelMessagesChannel', channelId: channelId},
        {
            received: message => dispatch(receiveMessage(message))
        }
    );
}

const msp = (state, ownProps) => {
    const channelId = ownProps.match.params.channelId ? ownProps.match.params.channelId : 0;
    const messlength = state.entities.messages[channelId] ? state.entities.messages[channelId].length : 0;
    const usersLength = state.entities.users.length;
    return {
        user: state.entities.users[state.session.id],
        users: state.entities.users,
        sessionId: state.session.id,
        server: state.entities.servers[ownProps.match.params.serverId],
        servers: state.entities.servers,
        messages: state.entities.messages[channelId],
        channels: state.entities.channels,
        messlength: messlength,
        usersLength: usersLength
}};

const mdp = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
    logout: () => dispatch(logout()),
    getServer: (serverId) => dispatch(getServer(serverId)),
    getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
    subscribeToChannelMessages: (channelId) => subscribeToChannelMessages(channelId, dispatch),
});

export default withRouter(connect(msp,mdp)(Home));