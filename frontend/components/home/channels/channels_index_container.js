import {connect} from 'react-redux';
import { deleteServer, leaveServer} from '../../../actions/server_actions';
import {openModal} from '../../../actions/modal_actions'
import ChannelsIndex from './channels_index';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId],
    userId: state.session.id,
    channels: Object.values(state.entities.channels)
})
const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('channelCreateForm')),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    leaveServer: (serverId, userId) => dispatch(leaveServer(serverId, userId)),
})


export default withRouter(connect(msp,mdp)(ChannelsIndex));