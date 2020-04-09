import {connect} from 'react-redux';
import MessagesBody from './messages_body';
import {withRouter} from 'react-router-dom';
import {getChannelMessages} from '../../../actions/messages_actions'

const msp = (state, ownProps) => {
    return {
        messages: state.entities.messages
    }
}
const mdp = (dispatch) => {
    return {
        getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
}
}


export default withRouter(connect(msp,mdp)(MessagesBody));