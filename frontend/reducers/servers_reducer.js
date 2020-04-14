import {RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER} from '../actions/server_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const serversReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case REMOVE_SERVER:
            const new_servers = Object.assign({}, state);
            delete new_servers[action.serverId]
            return new_servers;
        case RECEIVE_SERVERS:
        case RECEIVE_CURRENT_USER:
            if (!action.servers) return {}
            return Object.assign({}, action.servers, state, );
        case RECEIVE_SERVER:
            return Object.assign({}, state, {[action.server.id]: action.server});
        default:
            return state;
    }
}

export default serversReducer;