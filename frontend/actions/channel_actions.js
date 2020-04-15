import * as api_util from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveChannel = ({channel ,messages  }) => ({
    type: RECEIVE_CHANNEL,
    channel,
    messages
});

export const removeChannel = ({channel }) => ({
    type: REMOVE_CHANNEL,
    channel
});

export const receiveChannels = (channels) =>({
    type: RECEIVE_CHANNELS,
    channels
});

export const getChannel = (channelId) => dispatch => (
    api_util.getChannel(channelId).then( 
        (channel) => dispatch(receiveChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
    )
);


export const getChannels = (serverId) => dispatch =>(
    api_util.getChannels(serverId).then( 
        (channels) => dispatch(receiveChannels(channels)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const createChannel = (channel, serverId) => dispatch =>(
    api_util.createChannel(channel, serverId).then( 
        (channel) => dispatch(receiveChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const deleteChannel = (channelId) => dispatch =>(
    api_util.removeChannel(channelId).then( 
        (channel) => dispatch(removeChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
        )
);

export const updateChannel = (channel, channelId) => dispatch => (
    api_util.updateChannel(channel, channelId).then( 
        (channel) => dispatch(receiveChannel(channel)), 
        (error) => dispatch(receiveErrors(error))
        )
);