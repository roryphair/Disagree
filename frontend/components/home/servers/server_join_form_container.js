import ServerJoinForm from './server_join_form';
import {connect} from 'react-redux';
import {joinServer} from '../../../actions/server_actions';
import {openModal, closeModal} from '../../../actions/modal_actions'
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) =>({
    errors: state.errors,
})

const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('serverChoice')),
    joinServer: (serverId) => dispatch(joinServer(serverId)),
})

export default withRouter(connect(msp, mdp)(ServerJoinForm));