import * as api_util from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_FIRST_MESSAGE = 'RECEIVE_FIRST_MESSAGE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveMessages = ({messages}) => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveMessage = ({message, channelId}) => ({
    type: RECEIVE_MESSAGE,
    message,
    channelId
});

export const removeMessage = ({message}) => ({
    type: REMOVE_MESSAGE,
    message
});


export const receiveFirstMessage = ({message, channelId, user}) => ({
    type: RECEIVE_FIRST_MESSAGE,
    message,
    channelId,
    user
});

export const getChannelMessages = (channelId, receiverId) => dispatch =>(
    api_util.getChannelMessages(channelId, receiverId).then( 
        (Messages) => dispatch(receiveMessages(Messages)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createChannelMessage = (directMessage, serverId) => dispatch =>(
    api_util.createChannelMessage(directMessage, serverId).then( 
        () => {},
        // (directMessage) => dispatch(receiveMessage(directMessage)
        (error) => dispatch(receiveErrors(error))
        )
);
export const createDirectMessage = (directMessage,receiverId) => dispatch =>(
    api_util.createDirectMessage(directMessage,receiverId).then(
        () =>{},
        // (directMessage) => dispatch(receiveMessage(directMessage)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createFirstDirectMessage = (directMessage) => dispatch =>(
    api_util.createFirstDirectMessage(directMessage).then(
        (directMessage) => dispatch(receiveFirstMessage(directMessage)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const getDirectMessages = (author_id, receiver_id) => dispatch =>(
    api_util.getDirectMessages(author_id, receiver_id).then( 
        (Messages) => dispatch(receiveMessages(Messages)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const removeDirectMessage = (messageId) => dispatch =>(
    api_util.removeDirectMessage(messageId).then( 
        () => {},
        // (message) => dispatch(removeMessage(message)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const removeChannelMessage = (messageId) => dispatch =>(
    api_util.removeChannelMessage(messageId).then( 
        () => {},
        // (message) => dispatch(removeMessage(message)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const updateDirectMessage = (message, messageId) => dispatch =>(
    api_util.updateDirectMessage(message,messageId).then(
        () =>{},
        // (message) => dispatch(receiveMessage(message)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const updateChannelMessage = (message, messageId) => dispatch =>(
    api_util.updateChannelMessage(message,messageId).then(
        () =>{},
        // (message) => dispatch(receiveMessage(message)), 
        (error) => dispatch(receiveErrors(error))
        )
);