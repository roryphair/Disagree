import ServerIndex from './server_index';
import {connect} from 'react-redux';
import {createServer, fetchServers} from '../../../actions/server_actions';
import {openModal} from '../../../actions/modal_actions'

const msp = (state) =>({
    servers: Object.values(state.entities.servers)
})
const mdp = (dispatch) => ({
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server)),
    openModal: () => dispatch(openModal('serverChoice'))
})

export default connect(msp, mdp)(ServerIndex);