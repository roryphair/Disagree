import {connect} from 'react-redux';
import MessagesBody from './messages_body';
import {withRouter} from 'react-router-dom';
import {getChannelMessages} from '../../../actions/messages_actions'

const msp = (state, ownProps) => {
    const channelId = ownProps.match.params.channelId;
    const serverId = ownProps.match.params.serverId;
    if(serverId !== '@me'){
        return {
            users: state.entities.users,
            receiver: state.entities.servers[serverId],
        };
    } else {
        return {
            receiver: state.entities.users[channelId],
            users: state.entities.users,
        };
    }
}
const mdp = (dispatch) => {
    return {
        getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
    }
}

export default withRouter(connect(msp,mdp)(MessagesBody));