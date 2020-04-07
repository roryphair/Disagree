import {RECEIVE_SERVER, RECEIVE_SERVERS} from '../actions/server_actions'

const serversReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SERVERS:
            return action.servers;
        case RECEIVE_SERVER:
            return Object.assign({}, state, {[action.server.id]: action.server});
        default:
            return state;
    }
}

export default serversReducer;