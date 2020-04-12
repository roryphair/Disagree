import {RECEIVE_CHANNEL} from '../actions/channel_actions' 
import {RECEIVE_MESSAGES, RECEIVE_MESSAGE} from '../actions/messages_actions';

const MessagesReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MESSAGE:
            state[action.channelId].push(action.message);
            return Object.assign({}, state);
        case RECEIVE_MESSAGES:
        case RECEIVE_CHANNEL:
            if (!action.messages) return {};
            return Object.assign({}, state, action.messages);
        default:
            return state;
    }
}

export default MessagesReducer;