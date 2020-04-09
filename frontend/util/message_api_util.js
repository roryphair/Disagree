
export const getChannelMessages = (channelsId) => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${channelsId}/channel_messages`
    })
)

export const getDirectMessages = (serverId) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId}/channel`
    })
)


export const createChannelMessage = (message, channelId) => (
    $.ajax({
        method: 'POST',
        url: `/api/channels/${channelId}/channel_messages`,
        data: {message}
    })
)

export const createDirectMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: `/api/direct_messages`,
        data: {message}
    })
)


export const removeChannelMessage = (messagesId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channel_messages/${messagesId}`,
    })
)
