import {RECEIVE_SERVER} from '../actions/server_actions';
import {RECEIVE_CHANNEL, RECEIVE_CHANNELS} from '../actions/channel_actions';

const channelsReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {[action.channel.id]: action.channel})
        case RECEIVE_CHANNELS:
        case RECEIVE_SERVER:
            return action.channels;
        default:
            return state;
    }
}

export default channelsReducer;