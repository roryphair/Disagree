import {RECEIVE_SERVER, RECEIVE_SERVERS} from '../actions/server_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const serversReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SERVERS:
        case RECEIVE_CURRENT_USER:
            if (!action.servers) return []
            return action.servers;
        case RECEIVE_SERVER:
            return Object.assign({}, state, {[action.server.id]: action.server});
        default:
            return state;
    }
}

export default serversReducer;