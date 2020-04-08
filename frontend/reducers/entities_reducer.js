import {combineReducers} from 'redux';
import userReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import directMessagesReducer from './direct_messages_reducers';
import channelChatsReducer from './channel_chats_reducer';

export default combineReducers(
    {users: userReducer, 
        servers: serversReducer, 
        channels: channelsReducer,
        direct_messages: directMessagesReducer,
        channel_messages: channelChatsReducer,
    });