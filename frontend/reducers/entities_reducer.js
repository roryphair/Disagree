import {combineReducers} from 'redux';
import userReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import MessagesReducer from './messages_reducer';

export default combineReducers(
    {users: userReducer, 
        servers: serversReducer, 
        channels: channelsReducer,
        messages: MessagesReducer,
        
    });