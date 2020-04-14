import CreateServerForm from './create_server_form';
import {connect} from 'react-redux';
import {createServer} from '../../../actions/server_actions';
import {openModal, closeModal} from '../../../actions/modal_actions'
import {resetErrors} from '../../../actions/session_actions'
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) =>({
    user: state.entities.users[state.session.id],
    errors: state.errors,
})
const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('serverChoice')),
    closeModal: () => dispatch(closeModal()),
    createServer: (server) => dispatch(createServer(server)),
    resetErrors: () => dispatch(resetErrors()),
})

export default withRouter(connect(msp, mdp)(CreateServerForm));