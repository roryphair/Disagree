import {connect} from 'react-redux';
import { } from '../../actions/session_actions';
import ChannelsIndex from './channels_index';

const msp = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: state.entities.channels
})
const mdp = (dispatch) => ({

})


export default connect(msp,mdp)(ChannelsIndex);