import CreateServerForm from './create_server_form';
import {connect} from 'react-redux';
import {createServer} from '../../../actions/server_actions';
import {openModal, closeModal} from '../../../actions/modal_actions'

const msp = (state) =>({
    user: state.entities.users[state.session.id],
})
const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('serverChoice')),
    closeModal: () => dispatch(closeModal()),
    createServer: (server) => dispatch(createServer(server)),
})

export default connect(msp, mdp)(CreateServerForm);