import ServerIndex from './server_index';
import {connect} from 'react-redux';
import {createServer, getServers} from '../../../actions/server_actions';
import {openModal} from '../../../actions/modal_actions'
import {withRouter} from 'react-router-dom';

const msp = (state) =>({
    servers: Object.values(state.entities.servers)
})
const mdp = (dispatch) => ({
    getServers: () => dispatch(getServers()),
    createServer: (server) => dispatch(createServer(server)),
    openModal: () => dispatch(openModal('serverChoice'))
})

export default withRouter(connect(msp, mdp)(ServerIndex));