import {connect} from 'react-redux';
import {updateChannel, deleteChannel } from '../../../actions/channel_actions';
import EditChannel from './edit_channel';
import {withRouter} from 'react-router-dom';
import {closeModal} from '../../../actions/modal_actions';

const msp = (state, ownProps) => ({
    errors: state.errors,
    channelId: ownProps.match.params.channelId
})
const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    updateChannel: (channel, channelId) => dispatch(updateChannel(channel, channelId)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
})

export default withRouter(connect(msp,mdp)(EditChannel));