import {connect} from 'react-redux';
import {createChannel } from '../../../actions/channel_actions';
import {closeModal} from '../../../actions/modal_actions'
import CreateChannel from './create_channel.jsx';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => ({
    errors: state.errors,
    serverId: ownProps.match.params.serverId
})
const mdp = (dispatch) => ({
    createChannel: (channel, serverId) => dispatch(createChannel(channel, serverId)),
    closeModal: () => dispatch(closeModal()),
})


export default withRouter(connect(msp,mdp)(CreateChannel));