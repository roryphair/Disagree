import {RECEIVE_CHANNEL} from '../actions/channel_actions' 

const MessagesReducer = (state = [], action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHANNEL:
            if (!action.messages) return [];
            return action.messages;
        default:
            return state;
    }
}

export default MessagesReducer;