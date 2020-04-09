import {connect} from 'react-redux';
import {getChannels, getChannel } from '../../../actions/channel_actions';
import ChannelsIndex from './channels_index';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: Object.values(state.entities.channels)
})
const mdp = (dispatch) => ({
    getChannels: (serverId) => dispatch(getChannels(serverId)),
    getChannel: (channelId) => dispatch(getChannel(channelId))
})

export default withRouter(connect(msp,mdp)(ChannelsIndex));