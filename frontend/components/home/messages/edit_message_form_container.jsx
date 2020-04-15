import {connect} from 'react-redux';
import {updateChannelMessage, removeChannelMessage, updateDirectMessage, removeDirectMessage } from '../../../actions/messages_actions';
import EditMessageForm from './edit_message_form';
import {withRouter} from 'react-router-dom';
import {closeModal} from '../../../actions/modal_actions';

const msp = (state, ownProps) => ({
    message: state.entities.messages[ownProps.match.params.messageId],
    messageId: ownProps.match.params.messageId,
    errors: state.errors,
})
const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    updateChannelMessage: (message, messageId) => dispatch(updateChannelMessage(message, messageId)),
    updateDirectMessage: (message, messageId) => dispatch(updateDirectMessage(message, messageId)),
    deleteChannelMessage: (messageId) => dispatch(removeChannelMessage(messageId)),
    deleteDirectMessage: (messageId) => dispatch(removeDirectMessage(messageId)),
})

export default withRouter(connect(msp,mdp)(EditMessageForm));