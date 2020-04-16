import {connect} from 'react-redux';
import MessagesBody from './messages_body';
import {withRouter} from 'react-router-dom';
import {getChannelMessages} from '../../../actions/messages_actions'
import {openModal} from '../../../actions/modal_actions'

const msp = (state, ownProps) => {
    const channelId = ownProps.match.params.channelId;
    const serverId = ownProps.match.params.serverId;
    if(serverId !== '@me'){
        return {
            currentUserId: state.session.id,
            users: state.entities.users,
            receiver: state.entities.servers[serverId],
            errors: state.errors,
        };
    } else {
        return {
            currentUserId: state.session.id,
            receiver: state.entities.users[channelId],
            users: state.entities.users,
            errors: state.errors,
        };
    }
}
const mdp = (dispatch) => {
    return {
        getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
        openModal: () => dispatch(openModal('channelMessageEdit')),
    }
}

export default withRouter(connect(msp,mdp)(MessagesBody));