import {RECEIVE_SERVER} from '../actions/server_actions';
import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from '../actions/channel_actions';

const channelsReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {[action.channel.id]: action.channel})
        case RECEIVE_CHANNELS:
        case RECEIVE_SERVER:
            if(!action.channels) return {}
            return action.channels;
        case REMOVE_CHANNEL:
            const new_channels = Object.assign({}, state);
            delete new_channels[action.channel.id]
            return new_channels;
        default:
            return state;
    }
}

export default channelsReducer;