import * as api_util from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveMessages = ({messages}) => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const getChannelMessages = (channelId, receiverId) => dispatch =>(
    api_util.getChannelMessages(channelId, receiverId).then( 
        (Messages) => dispatch(receiveMessages(Messages)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createChannelMessage = (directMessage, receiverId) => dispatch =>(
    api_util.createChannelMessage(directMessage, receiverId).then( 
        (directMessage) => dispatch(receiveMessages(directMessage)), 
        (error) => dispatch(receiveErrors(error))
        )
);
export const createDirectMessage = (directMessage, serverId) => dispatch =>(
    api_util.createDirectMessage(directMessage, serverId).then( 
        (directMessage) => dispatch(receiveMessages(directMessage)), 
        (error) => dispatch(receiveErrors(error))
        )
);
export const getDirectMessages = (author_id, receiver_id) => dispatch =>(
    api_util.getDirectMessages(author_id, receiver_id).then( 
        (Messages) => dispatch(receiveMessages(Messages)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const removeDirectMessage = (channelId) => dispatch =>(
    api_util.removeDirectMessage(channelId).then( 
        (channel) => dispatch(receiveChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const removeChannelMessage = (channelId) => dispatch =>(
    api_util.removeChannelMessage(channelId).then( 
        (channel) => dispatch(receiveChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
        )
);