import {connect} from 'react-redux';
import { createFirstDirectMessage } from '../../../actions/messages_actions';
import {closeModal} from '../../../actions/modal_actions'
import CreateDMForm from './new_dm_form';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => ({
    errors: state.errors,
})
const mdp = (dispatch) => ({
    createFirstDirectMessage: (message) => dispatch(createFirstDirectMessage(message)),
    closeModal: () => dispatch(closeModal()),
})


export default withRouter(connect(msp,mdp)(CreateDMForm));