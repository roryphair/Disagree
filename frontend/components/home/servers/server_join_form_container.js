import ServerJoinForm from './server_join_form';
import {connect} from 'react-redux';
import {joinServer} from '../../../actions/server_actions';
import {openModal, closeModal} from '../../../actions/modal_actions'
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) =>({
    
})

const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('serverChoice')),
    closeModal: () => dispatch(closeModal()),
    joinServer: (serverId) => dispatch(joinServer(serverId)),
})

export default withRouter(connect(msp, mdp)(ServerJoinForm));