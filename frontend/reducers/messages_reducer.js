import {RECEIVE_CHANNEL} from '../actions/channel_actions' 
import {RECEIVE_MESSAGES, RECEIVE_FIRST_MESSAGE, RECEIVE_MESSAGE, REMOVE_MESSAGE} from '../actions/messages_actions';

const MessagesReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        case REMOVE_MESSAGE:
            const new_messages = Object.assign({}, state);
            delete new_messages[action.message.id]
            return new_messages;
        case RECEIVE_FIRST_MESSAGE:
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message})   
        case RECEIVE_MESSAGES:
        case RECEIVE_CHANNEL:
            if (!action.messages) return {};
            return action.messages;
        default:
            return state;
    }
}

export default MessagesReducer;