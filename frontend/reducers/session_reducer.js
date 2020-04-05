import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const defaultSession = {
    id: null
}

const sessionReducer = (state = defaultSession, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {id: action.user.id})
        case LOGOUT_CURRENT_USER:
            return defaultSession;
        default:
            return state;
    }
}

export default sessionReducer;