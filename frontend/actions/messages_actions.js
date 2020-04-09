import * as api_util from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_CHANNEL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveMessages = ({messages}) => ({
    type: RECEIVE_CHANNEL,
    messages
});


export const getChannelMessages = (channelId) => dispatch =>(
    api_util.getChannelMessages(channelId).then( 
        (Messages) => dispatch(receiveMessages(Messages)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createChannelMessage = (directMessage, serverId) => dispatch =>(
    api_util.createChannelMessage(directMessage, serverId).then( 
        (directMessage) => dispatch(receiveMessage(directMessage)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const getDirectMessages = (author_id, receiver_id) => dispatch =>(
    api_util.getDirectMessages(author_id, receiver_id).then( 
        (Messages) => dispatch(receiveMessages(Messages)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createDirectMessage = (directMessage, serverId) => dispatch =>(
    api_util.createDirectMessage(directMessage, serverId).then( 
        (directMessage) => dispatch(receiveMessage(directMessage)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const removeChannelMessage = (channelId) => dispatch =>(
    api_util.removeChannelMessage(channelId).then( 
        (channel) => dispatch(receiveChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
        )
);