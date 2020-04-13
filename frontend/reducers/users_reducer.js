import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_SERVER} from '../actions/server_actions';

const usersReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SERVER:
            const oldUser = state[action.currentUserId];
            if(oldUser) {
                return Object.assign({}, state, action.users, {[oldUser.id]: oldUser})
            }
            else{
                return Object.assign({}, state, action.users);
            }
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
}

export default usersReducer;