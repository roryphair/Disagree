import {connect} from 'react-redux';
import MessagesWrite from './messages_write';
import {withRouter} from 'react-router-dom';
import {createChannelMessage, createDirectMessage} from '../../../actions/messages_actions'

const msp = (state, ownProps) => {
    if(ownProps.match.params.serverId === '@me'){
        return {
            receiver: state.entities.users[ownProps.match.params.channelId],
        };
    } 
    else {
        return{
            receiver: state.entities.channels[ownProps.match.params.channelId],
                  }
    }
};

const mdp = (dispatch,ownProps) => {
    if(ownProps.match.params.serverId === '@me'){
        return {
            createMessage: (channelId, receiverId) => dispatch(createDirectMessage(channelId, receiverId)),
        };
    } else {
        return { 
            createMessage: (channelId, receiverId) => dispatch(createChannelMessage(channelId, receiverId)),
        };
    }
}

export default withRouter(connect(msp,mdp)(MessagesWrite));