import {connect} from 'react-redux';
import MessagesBody from './messages_body';
import {withRouter} from 'react-router-dom';
import {getChannelMessages} from '../../../actions/messages_actions'

const msp = (state, ownProps) => {
    const channelId = ownProps.match.params.channelId;
    if(channelId){
        return {
            users: state.entities.users,
            servers: state.entities.servers,
            messages: state.entities.messages[channelId]
        };
    } else {
        return {
            messages: null
        };
    }
}
const mdp = (dispatch) => {
    return {
        getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
    }
}

export default withRouter(connect(msp,mdp)(MessagesBody));