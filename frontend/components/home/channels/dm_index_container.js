import {connect} from 'react-redux';
import DMIndex from './dm_index';
import {openModal} from '../../../actions/modal_actions';

const usersFromDms = (state) => {
    const usersId = state.entities.users[state.session.id].users_dmed;
    if(state.entities.users.length > 1){
        return Object.keys(usersId.map( (id)=> state.entities.users[id]));
    }else{
        return []
    }
}

const msp = (state, ownProps) => ({
    dmUsers: Object.keys(state.entities.users[state.session.id].users_dmed),
    users: state.entities.users
})
const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('dmCreateForm')),
})


export default connect(msp,mdp)(DMIndex);